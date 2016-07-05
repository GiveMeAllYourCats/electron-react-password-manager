'use strict'

const gulp         = require('gulp')
const packageJson  = require('./src/package.json')
const gulpElectron = require('gulp-electron')
const rimraf       = require('rimraf')
const path         = require('path')
const builder      = require("electron-builder")

const electronVersion = '1.2.5'

const Platform = builder.Platform

process.NODE_ENV = 'test'

gulp.task('default', cb => {
  rimraf('./build', () => {
    build(['win32-ia32', 'win32-x64', 'linux-ia32', 'linux-x64', 'darwin-x64'], cb)
  })
})

gulp.task('installer', () => {
  builder.build({
    targets: Platform.WINDOWS.createTarget(),
  })
  .catch((error) => {
    console.log(error)
  })
})

gulp.task('win32', cb => {
  build(['win32-ia32'], cb)
})

gulp.task('win64', cb => {
  build(['win32-x64'], cb)
})

gulp.task('darwin', cb => {
  build(['darwin-x64'], cb)
})

gulp.task('linux32', cb => {
  build(['linux-ia32'], cb)
})

gulp.task('linux64', cb => {
  build(['linux-x64'], cb)
})

const build = (platformsSet, cb) => {
  var stream = gulp.src('').pipe(gulpElectron({
    src:         './src',
    packageJson: packageJson,
    release:     './build',
    cache:       './cache',
    version:     'v' + electronVersion,
    packaging:   true,
    platforms:   platformsSet,
    platformResources: {
      darwin: {
        CFBundleDisplayName: packageJson.name,
        CFBundleIdentifier:  packageJson.name,
        CFBundleName:        packageJson.name,
        CFBundleVersion:     packageJson.version,
        icon:                path.join(__dirname, 'src', 'inc', 'img', 'logo.png'),
      },
      win: {
        'version-string':  packageJson.version,
        'file-version':    packageJson.version,
        'product-version': packageJson.version,
        icon:              path.join(__dirname, 'src', 'inc', 'img', 'logo.png'),
      },
    },
  })).pipe(gulp.dest(''))
  stream.on('end', function() {
    cb()
  })
}
