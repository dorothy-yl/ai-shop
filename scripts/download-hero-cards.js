const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// 首页卡片图片数据 - 直接使用 S3 URL
const heroCardImages = [
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-0.webp',
    filename: 'hero-card-1.webp',
    description: 'Pastel colored long-sleeve blouses'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-1.webp',
    filename: 'hero-card-2.webp',
    description: 'Versatile midi summer dress'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-2.webp',
    filename: 'hero-card-3.webp',
    description: 'Silk dresses with lace details'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-3.webp',
    filename: 'hero-card-4.webp',
    description: 'Blazer with cinched waist'
  },
  // 第二组
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-4.webp',
    filename: 'hero-card-5.webp',
    description: 'Wedding in Jackson Hole'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-5.webp',
    filename: 'hero-card-6.webp',
    description: 'Jackets for date nights'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-6.webp',
    filename: 'hero-card-7.webp',
    description: 'Rehearsal dinner as bride'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-7.webp',
    filename: 'hero-card-8.webp',
    description: 'Work dresses for rectangle body type'
  },
  // 移动端图片
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/mobile-home-card-0.webp',
    filename: 'hero-card-mobile-1.webp',
    description: 'Pastel colored long-sleeve blouses (mobile)'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/mobile-home-card-1.webp',
    filename: 'hero-card-mobile-2.webp',
    description: 'Versatile midi summer dress (mobile)'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/mobile-home-card-2.webp',
    filename: 'hero-card-mobile-3.webp',
    description: 'Silk dresses with lace details (mobile)'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/mobile-home-card-3.webp',
    filename: 'hero-card-mobile-4.webp',
    description: 'Blazer with cinched waist (mobile)'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/mobile-home-card-4.webp',
    filename: 'hero-card-mobile-5.webp',
    description: 'Wedding in Jackson Hole (mobile)'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/mobile-home-card-5.webp',
    filename: 'hero-card-mobile-6.webp',
    description: 'Jackets for date nights (mobile)'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/mobile-home-card-6.webp',
    filename: 'hero-card-mobile-7.webp',
    description: 'Rehearsal dinner as bride (mobile)'
  },
  {
    url: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/mobile-home-card-7.webp',
    filename: 'hero-card-mobile-8.webp',
    description: 'Work dresses for rectangle body type (mobile)'
  }
];

// 创建目录（如果不存在）
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 下载图片函数
function downloadImage(imageUrl, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = imageUrl.startsWith('https') ? https : http;
    
    protocol.get(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // 处理重定向
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error(`Failed to download ${imageUrl}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// 主下载函数
async function downloadAllImages() {
  console.log('🚀 Starting to download hero card images...\n');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const image of heroCardImages) {
    try {
      const filepath = path.join(publicDir, image.filename);
      
      // 检查文件是否已存在
      if (fs.existsSync(filepath)) {
        console.log(`⏭️  Skipped (already exists): ${image.filename}`);
        continue;
      }
      
      await downloadImage(image.url, filepath);
      successCount++;
      
      // 添加延迟，避免请求过快
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`✗ Error downloading ${image.filename}:`, error.message);
      errorCount++;
    }
  }
  
  console.log('\n✨ Download completed!');
  console.log(`   Success: ${successCount} images`);
  console.log(`   Errors: ${errorCount} images`);
  console.log(`   Total: ${heroCardImages.length} images\n`);
}

// 执行下载
downloadAllImages().catch(console.error);

