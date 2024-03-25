const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function ComprimeImagens (){
    return gulp.src('./source/imagens/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'));
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}



function compilaSass(){
    return gulp.src('./source/styles/main.scss')
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .pipe(gulp.dest('.build/styles'));
}




exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.imagens = ComprimeImagens; 