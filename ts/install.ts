/* 安装与配置大法
npm init -y
npm install typescript ts-node node --save-dev // install a package only needed in development

tsc --init //然后，在tsconfig.json中，修改 "target": "es6",
npm install typescript-formatter --save-dev //安装一个格式自动纠正的程序
每次编译前，输入：.\node_modules\.bin\tsfmt -r
*/

/* 装包大法

npm install issue --save
npm install utils axios --save
npm install fs --save

*/

/* 运行大法

node_modules/.bin/ts-node xxx.ts //运行ts文件

*/

/* 错误集合
运行时，Unable to compile TypeScript
b.ts(6,8): error TS1192: Module '"fs"' has no default export

****解决：npm -install @type/fs-extra

error TS7016: Could not find a declaration file for module 'fs-extra'
根据界面报错提示，发现缺少安装对应库的 declaration 文件

****解决： npm -install @type/fs-extra


最后， npm install typescript-formatter --save-dev 安装一个格式自动纠正的程序
每次编译前，输入：.\node_modules\.bin\tsfmt -r

*/


