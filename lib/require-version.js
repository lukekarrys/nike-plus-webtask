import path from 'path'
import fs from 'fs'
import semver from 'semver'

const baseRequire = module.constructor.prototype.require

const satisfies = (versionPath, soughtModule, soughtVersion) => {
  const pack = fs.readFileSync(path.join(versionPath, soughtModule, 'package.json'))
  const {version} = JSON.parse(pack)
  return semver.satisfies(version, soughtVersion) ? version : null
}

// Modify global require
// Adapted from https://github.com/brumfb/require-version
module.constructor.prototype.require = function (request) {
  let newRequest = request
  const [name, version] = request.split('@')

  if (name && version) {
    const nodeModules = path.join(path.dirname(this.filename), 'node_modules')
    const match = satisfies(nodeModules, name, version)

    if (match) {
      if (match !== version) {
        console.warning(`${name} was required as ${version} but will be using ${match}.`)
      }
      newRequest = name
    } else {
      throw new Error(`Tried to require ${name} but could not find a version that satisfied semver for ${version}.`)
    }
  }

  return baseRequire.apply(this, [newRequest])
}
