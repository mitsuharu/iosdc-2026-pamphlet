module.exports = {
  title: '自作 PC で始めるローカル LLM を利用した Xcode のコード自動生成',
  author: '江本光晴',
  language: 'ja',
  size: 'A4',
  theme: [
    '@mitsuharu/vivliostyle-theme-iosdc-pamphlet@0.3.1',
    '@mitsuharu/vivliostyle-theme-noto-sans-jp',
    'theme/styles',
  ],
  entry: ['index.md'],
  entryContext: './manuscripts',
  output: ['./output/output.pdf'],
  workspaceDir: '.vivliostyle',
  toc: false,
  cover: undefined,
  vfm: {
    hardLineBreaks: false,
    disableFormatHtml: false,
  },
}
