# Plush - AI-Powered Fashion Search Platform

一个完整复刻 [Plush.shop](https://www.plush.shop/) 的时尚搜索平台，使用 Next.js 16 和 Tailwind CSS 4 构建。

## ✨ 项目特点

### 🎯 核心功能

1. **首页 (`/`)**
   - ✅ 自动轮播的 Hero 区域（8张卡片，响应式图片）
   - ✅ 轮播指示器和自动切换
   - ✅ AI 搜索栏
   - ✅ "Try searching" 搜索示例轮播
   - ✅ "Popular searches" 热门搜索轮播
   - ✅ CTA Banner 和 "How It Works" 区域
   - ✅ 博客文章展示
   - ✅ 品牌展示区

2. **品牌页面 (`/brands`)**
   - ✅ 字母导航（#, A-Z）
   - ✅ 滚动自动高亮当前字母
   - ✅ 按字母分组的品牌列表
   - ✅ 150+ 品牌数据

3. **博客页面 (`/blogs`)**
   - ✅ 特色文章大卡片
   - ✅ "Most Read Stories" 区域
   - ✅ 博客文章网格布局
   - ✅ 15+ 博客文章

4. **响应式导航**
   - ✅ 桌面端下拉菜单（Categories & Edits）
   - ✅ 移动端全屏菜单
   - ✅ 社交媒体链接
   - ✅ 滚动锁定功能

### 🎨 设计特点

- **字体**: Playfair Display (标题) + Inter (正文)
- **响应式**: 完美适配桌面、平板和移动端
- **动画**: 平滑过渡和悬停效果
- **优化**: Next.js Image 组件优化图片加载
- **SEO**: 完整的元数据配置

## 🚀 技术栈

- **框架**: [Next.js 16](https://nextjs.org/)
- **样式**: [Tailwind CSS 4](https://tailwindcss.com/)
- **语言**: TypeScript
- **字体**: Google Fonts (Playfair Display & Inter)
- **部署**: Vercel (推荐)

## 📦 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 3. 构建生产版本

```bash
npm run build
npm start
```

## 📂 项目结构

```
ai-shop/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 根布局
│   │   ├── page.tsx            # 首页
│   │   ├── brands/
│   │   │   └── page.tsx        # 品牌页面
│   │   ├── blogs/
│   │   │   └── page.tsx        # 博客页面
│   │   └── globals.css         # 全局样式
│   └── components/
│       ├── Header.tsx          # 导航栏（含下拉菜单）
│       ├── Footer.tsx          # 页脚
│       ├── HeroSection.tsx     # 首页 Hero 轮播
│       ├── SearchCarousel.tsx  # 搜索示例轮播
│       ├── CTABanner.tsx       # CTA 横幅
│       ├── HowItWorks.tsx      # "How It Works" 区域
│       ├── BlogSection.tsx     # 博客区域
│       └── BrandsShowcase.tsx  # 品牌展示
├── public/
│   ├── home-card-*.webp        # Hero 轮播图片（桌面+移动端）
│   ├── try-search-*.jpg        # "Try searching" 图片
│   ├── popular-*.jpg           # "Popular searches" 图片
│   ├── blog-*.jpg              # 博客图片
│   ├── brand-*.webp            # 品牌 Logo
│   └── icons/                  # 图标文件
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎯 页面路由

| 路径 | 描述 |
|------|------|
| `/` | 首页 |
| `/brands` | 品牌列表页 |
| `/blogs` | 博客文章列表 |
| `/category/{slug}` | 分类页面 |
| `/edits/{slug}` | 精选页面 |
| `/blog/{slug}` | 单篇博客文章 |

## 🎨 导航菜单

### Categories（8个分类）
- Dresses
- Tops
- Pants
- Jackets
- Shoes
- Accessories
- Swimwear
- Activewear

### Edits（7个精选）
- Wedding Guest
- Work Wear
- Date Night
- Vacation
- Cocktail Event
- Resort Essentials
- Office Attire

## 📸 图片资源

项目包含 **85张** 从 [plush.shop](https://www.plush.shop/) 爬取的真实图片：

- ✅ Hero 轮播图（桌面 + 移动端，共16张）
- ✅ Try Searching 示例图片（8张）
- ✅ Popular Searches 图片（8张）
- ✅ 博客文章配图（4张）
- ✅ 品牌 Logo（20个 SVG）
- ✅ 品牌图片（20张）
- ✅ Banner 背景（4张）
- ✅ 社交媒体图标（4张）
- ✅ 装饰图标（1张）

### 图片爬取功能

项目包含自动化图片下载脚本：

```bash
# 运行图片爬取脚本
node scripts/download-images.js
```

**相关文档**:
- 📖 [图片使用示例](IMAGES_USAGE_EXAMPLES.md)
- 📖 [图片说明文档](public/IMAGES_README.md)
- 📖 [爬取完成报告](IMAGE_CRAWLING_COMPLETE.md)
- 📖 [项目总结](IMAGE_CRAWLER_SUMMARY.md)
- 🧪 测试页面: [http://localhost:3000/images-test](http://localhost:3000/images-test)

所有图片都通过 `src/lib/images.ts` 统一管理，提供 TypeScript 类型安全支持。

## 🔗 外部链接

- Instagram: [@_plushshopping](https://www.instagram.com/_plushshopping/)
- TikTok: [@_plushshopping](https://www.tiktok.com/@_plushshopping)
- LinkedIn: [Plush Shopping](https://www.linkedin.com/company/plushshopping/)

## 📝 开发说明

### 添加新品牌
编辑 `src/app/brands/page.tsx` 中的 `brandData` 对象。

### 添加新博客文章
编辑 `src/app/blogs/page.tsx` 中的 `blogPosts` 数组。

### 修改导航菜单
编辑 `src/components/Header.tsx` 中的 `categories` 和 `edits` 数组。

## 🎉 完成度

| 功能 | 状态 |
|------|------|
| 首页轮播 | ✅ 100% |
| 响应式设计 | ✅ 100% |
| 导航菜单 | ✅ 100% |
| 品牌页面 | ✅ 100% |
| 博客页面 | ✅ 100% |
| 图片资源 | ✅ 100% (85张) |
| 图片爬虫 | ✅ 100% |
| 链接配置 | ✅ 100% |
| 文档完善 | ✅ 100% |

## 📄 License

MIT

---

**Built with ❤️ by AI Assistant**
