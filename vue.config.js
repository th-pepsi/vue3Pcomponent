const args = process.argv.slice(2);
if (process.env.NODE_ENV == 'production' && args.includes('--all')) {
    const fs = require('fs');
    const path = require('path');
    const getEntries = (dir) => {
        let absPath = path.resolve(dir);
        let files = fs.readdirSync(absPath);
        let entries = {}
        files.forEach(item => {
            let p = path.resolve(absPath, item);
            if (fs.statSync(p).isDirectory()) {
                p = path.resolve(p, 'index.js')
                entries[item.split('.')[0]] = p
            }
        });
        return entries;
    }
    module.exports = {
        outputDir: 'dist', // 打包出口
        configureWebpack: {
            entry: { // 配置多入口
                ...getEntries('./src/packages')
            },
            output: {
                filename: `lib/[name]/index.js`,
                libraryTarget: 'umd',
                libraryExport: 'default',
                library: ['p', '[name]']
            },
            externals:{
                vue: {
                    root: 'Vue',
                    commonjs: 'vue',
                    commonjs2: 'vue',
                    amd: 'vue'
                  }
            },
        },
        css: {
            sourceMap: true,
            extract: {
                filename: 'css/[name]/style.css'
            }
        },
        chainWebpack: config => {
            config.optimization.delete('splitChunks')
            config.plugins.delete('copy')
            config.plugins.delete('preload')
            config.plugins.delete('prefetch')
            config.plugins.delete('html')
            config.plugins.delete('hmr')
            config.entryPoints.delete('app')
        },
    }
}