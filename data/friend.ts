export const Friends: Friend[] = [
  {
    title: '愧怍',
    description: '编程爱好者，编写所感兴趣的项目，现主攻js/ts全栈，希望能为开源社区做出一份贡献',
    website: 'https://kuizuo.cn',
    // avatar: require('./avatar/kuizuo.png'),
    avatar: '/img/friend/kui-zuo-logo.webp',
  },  
  {
    title: 'Shake-Jarjane',
    description: '魔改docusaurus大佬-2',
    website: 'https://www.shaking.site/',
    avatar: '/img/friend/Shake-Jarjane-logo.png',
  },  
  {
    title: 'Hydoc的小站',
    description: '魔改docusaurus大佬-3',
    website: 'https://hydoc.netlify.app/',
    avatar: '/img/friend/hydoc-logo.png',
  },  
  {
    title: 'Ruyu快乐猫',
    description: '全网最美博客ruyu-blog作者',
    website: 'https://www.kuailemao.xyz/',
    avatar: '/img/friend/ruyu-blog-logo.jpg',
  },  

  
];

export type Friend = {
  title: string;
  description: string;
  website: string;
  avatar?: any;
};
