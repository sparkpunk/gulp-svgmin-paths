const gulp     = require('gulp')
const svgmin   = require('gulp-svgmin')
const pretty   = require('gulp-pretty-html')

// ==================================================
// DEFAULT TASK =====================================
// ==================================================
gulp.task('default', ['optimize'])

// ==================================================
// CONFIGS ==========================================
// ==================================================
const plugin_config  = [{ 
   removeAttrs: { 
      attrs: [
         'svg:(width|height)',
         'path:(fill|fill-rule|stroke)'
      ]
   }
}, { removeViewBox: false }]

const pretty_config = {
   indent_size: 2,
   indent_char: '\t'
}

// ==================================================
// TASKS ============================================
// ==================================================
gulp.task('optimize', function() {
   return gulp.src('./src/**/*.svg')
   .pipe(svgmin({
      plugins: plugin_config
   }))
   .pipe(pretty(pretty_config))
   .pipe(gulp.dest('./out/'))
})
