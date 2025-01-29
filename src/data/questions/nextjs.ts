import { Question } from '../../types';

export const nextjsQuestions: Question[] = [
    {
      id: 'next-1',
      category: 'Next.js',
      title: 'What is Next.js?',
      answer: 'Next.js is a React framework that enables server-side rendering and static site generation for React applications. It provides features like routing, API routes, and optimized performance out of the box.',
    },
    {
      id: 'next-2',
      category: 'Next.js',
      title: 'What are the advantages of using Next.js?',
      answer: 'Advantages of Next.js include: 1) Automatic server-side rendering and static site generation. 2) Built-in routing system. 3) API routes for backend functionality. 4) Optimized performance with automatic code splitting. 5) Easy deployment with Vercel.',
    },
    {
      id: 'next-3',
      category: 'Next.js',
      title: 'What is the difference between server-side rendering (SSR) and static site generation (SSG) in Next.js?',
      answer: 'Server-side rendering (SSR) generates the HTML for a page on each request, allowing for dynamic content. Static site generation (SSG) generates the HTML at build time, serving the same content for all users until a new build is deployed.',
    },
    {
      id: 'next-4',
      category: 'Next.js',
      title: 'How do you create a new Next.js application?',
      answer: 'You can create a new Next.js application using the command: `npx create-next-app@latest my-app` which sets up a new Next.js project with all the necessary files and dependencies.',
    },
    {
      id: 'next-5',
      category: 'Next.js',
      title: 'What is the purpose of the pages directory in Next.js?',
      answer: 'The pages directory is where you define the routes of your application. Each file in this directory automatically becomes a route based on its file name, allowing for easy routing without additional configuration.',
    },
    {
      id: 'next-6',
      category: 'Next.js',
      title: 'What are API routes in Next.js?',
      answer: 'API routes allow you to create backend endpoints within your Next.js application. They are defined in the pages/api directory and can handle requests like GET, POST, etc., enabling you to build serverless functions.',
      codeExample: `// pages/api/hello.js
  export default function handler(req, res) {
    res.status(200).json({ message: 'Hello from API!' });
  }`,
    },
    {
      id: 'next-7',
      category: 'Next.js',
      title: 'How do you implement dynamic routing in Next.js?',
      answer: 'Dynamic routing in Next.js is implemented using square brackets in the file name within the pages directory. For example, a file named `[id].js` will match any route like `/1`, `/2`, etc.',
      codeExample: `// pages/posts/[id].js
  import { useRouter } from 'next/router';
  
  const Post = () => {
    const router = useRouter();
    const { id } = router.query;
  
    return <p>Post: {id}</p>;
  };
  
  export default Post;`,
    },
    {
      id: 'next-8',
      category: 'Next.js',
      title: 'What is getStaticProps in Next.js?',
      answer: 'getStaticProps is a function that allows you to fetch data at build time for static site generation. It runs on the server side and provides the fetched data as props to the page component.',
      codeExample: `// pages/index.js
  export async function getStaticProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
  
    return {
      props: { data },
    };
  }`,
    },
    {
      id: 'next-9',
      category: 'Next.js',
      title: 'What is getServerSideProps in Next.js?',
      answer: 'getServerSideProps is a function that allows you to fetch data on each request for server-side rendering. It runs on the server and provides the fetched data as props to the page component.',
      codeExample: `// pages/index.js
  export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
  
    return {
      props: { data },
    };
  }`,
    },
    {
      id: 'next-10',
      category: 'Next.js',
      title: 'What is getStaticPaths in Next.js?',
      answer: 'getStaticPaths is used in conjunction with getStaticProps to generate dynamic routes at build time. It returns an array of paths that should be pre-rendered based on the data.',
      codeExample: `// pages/posts/[id].js
  export async function getStaticPaths() {
    const res = await fetch('https://api.example.com/posts');
    const posts = await res.json();
  
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }));
  
    return { paths, fallback: false };
  }`,
    },
    {
      id: 'next-11',
      category: 'Next.js',
      title: 'How do you handle CSS in Next.js?',
      answer: 'Next.js supports CSS Modules and global CSS. You can import CSS files directly into your components, and for global styles, you can import them in the `_app.js` file.',
      codeExample: `// styles/Home.module.css
  .title {
    color: blue;
  }
  
  // pages/index.js
  import styles from '../styles/Home.module.css';
  
  const Home = () => {
    return <h1 className={styles.title}>Hello World</h1>;
  };`,
    },
    {
      id: 'next-12',
      category: 'Next.js',
      title: 'What is the purpose of the _app.js file in Next.js?',
      answer: 'The _app.js file is a custom App component that allows you to initialize pages. You can use it to persist layout between page changes, keep state when navigating pages, and inject additional data into pages.',
      codeExample: `// pages/_app.js
  import '../styles/globals.css';
  
  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  
  export default MyApp;`,
    },
    {
      id: 'next-13',
      category: 'Next.js',
      title: 'What is the purpose of the _document.js file in Next.js?',
      answer: 'The _document.js file is used to customize the HTML document structure. It allows you to modify the <html> and <body> tags, and is useful for adding global styles or scripts.',
      codeExample: `// pages/_document.js
  import Document, { Html, Head, Main, NextScript } from 'next/document';
  
  class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            <link rel="stylesheet" href="https://example.com/styles.css" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;`,
    },
    {
      id: 'next-14',
      category: 'Next.js',
      title: 'How do you implement API routes in Next.js?',
      answer: 'API routes are implemented by creating files in the pages/api directory. Each file exports a default function that handles requests and responses, allowing you to create serverless functions.',
      codeExample: `// pages/api/users.js
  export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' });
  }`,
    },
    {
      id: 'next-15',
      category: 'Next.js',
      title: 'What is the purpose of the Link component in Next.js?',
      answer: 'The Link component is used for client-side navigation between pages in a Next.js application. It prefetches linked pages for faster navigation and supports dynamic routing.',
      codeExample: `// pages/index.js
  import Link from 'next/link';
  
  const Home = () => {
    return (
      <div>
        <h1>Home Page</h1>
        <Link href="/about">Go to About</Link>
      </div>
    );
  };
  
  export default Home;`,
    },
    {
      id: 'next-16',
      category: 'Next.js',
      title: 'What is the purpose of the Head component in Next.js?',
      answer: 'The Head component allows you to modify the <head> section of your HTML document. You can use it to set the title, meta tags, and other elements that should be included in the head.',
      codeExample: `// pages/index.js
  import Head from 'next/head';
  
  const Home = () => {
    return (
      <div>
        <Head>
          <title>Home Page</title>
          <meta name="description" content="This is the home page" />
        </Head>
        <h1>Welcome to the Home Page</h1>
      </div>
    );
  };
  
  export default Home;`,
    },
    {
      id: 'next-17',
      category: 'Next.js',
      title: 'How do you handle image optimization in Next.js?',
      answer: 'Next.js provides an Image component that automatically optimizes images for performance. It supports lazy loading, responsive images, and serves images in modern formats.',
      codeExample: `// pages/index.js
  import Image from 'next/image';
  
  const Home = () => {
    return (
      <div>
        <h1>My Image</h1>
        <Image src="/my-image.jpg" alt="My Image" width={500} height={300} />
      </div>
    );
  };
  
  export default Home;`,
    },
    {
      id: 'next-18',
      category: 'Next.js',
      title: 'What is the purpose of the next/head module?',
      answer: 'The next/head module is used to manage the <head> section of your pages. It allows you to add elements like title, meta tags, and links dynamically based on the page content.',
    },
    {
      id: 'next-19',
      category: 'Next.js',
      title: 'How do you implement internationalization (i18n) in Next.js?',
      answer: 'Next.js supports internationalization (i18n) by allowing you to define locales and default locale in the next.config.js file. You can then use the useRouter hook to access the current locale.',
      codeExample: `// next.config.js
  module .exports = {
    i18n: {
      locales: ['en', 'fr', 'es'],
      defaultLocale: 'en',
    },
  };`,
    },
    {
      id: 'next-20',
      category: 'Next.js',
      title: 'What is the purpose of the next/image module?',
      answer: 'The next/image module is used for optimizing images in Next.js applications. It automatically serves images in the best format and size for the user’s device, improving performance and loading times.',
    },
    {
      id: 'next-21',
      category: 'Next.js',
      title: 'How do you implement custom error pages in Next.js?',
      answer: 'Custom error pages can be implemented by creating a file named `_error.js` in the pages directory. You can customize the rendering of error messages based on the error status code.',
      codeExample: `// pages/_error.js
  function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? \`An error \${statusCode} occurred on server\`
          : 'An error occurred on client'}
      </p>
    );
  }
  
  Error.getInitialProps = async ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };
  
  export default Error;`,
    },
    {
      id: 'next-22',
      category: 'Next.js',
      title: 'What is the purpose of the next/router module?',
      answer: 'The next/router module provides a way to programmatically navigate between pages in a Next.js application. It allows you to access the router object and perform actions like pushing or replacing routes.',
      codeExample: `// pages/index.js
  import { useRouter } from 'next/router';
  
  const Home = () => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push('/about');
    };
  
    return <button onClick={handleClick}>Go to About</button>;
  };
  
  export default Home;`,
    },
    {
      id: 'next-23',
      category: 'Next.js',
      title: 'How do you implement middleware in Next.js?',
      answer: 'Middleware in Next.js can be implemented using custom server logic or by using API routes. You can create middleware functions that run before your request handlers to perform tasks like authentication or logging.',
    },
    {
      id: 'next-24',
      category: 'Next.js',
      title: 'What is the purpose of the next.config.js file?',
      answer: 'The next.config.js file is used to customize the configuration of your Next.js application. You can define settings like environment variables, custom webpack configurations, and redirects.',
    },
    {
      id: 'next-25',
      category: 'Next.js',
      title: 'How do you handle authentication in Next.js?',
      answer: 'Authentication in Next.js can be handled using libraries like NextAuth.js or by implementing your own authentication logic using API routes and session management.',
    },
    {
      id: 'next-26',
      category: 'Next.js',
      title: 'What is the purpose of the next/script module?',
      answer: 'The next/script module is used to optimize loading of third-party scripts in Next.js applications. It allows you to control when and how scripts are loaded, improving performance.',
    },
    {
      id: 'next-27',
      category: 'Next.js',
      title: 'How do you implement static file serving in Next.js?',
      answer: 'Static files can be served in Next.js by placing them in the `public` directory. Files in this directory can be accessed directly via the base URL of the application.',
    },
    {
      id: 'next-28',
      category: 'Next.js',
      title: 'What is the purpose of the next/legacy-headers module?',
      answer: 'The next/legacy-headers module allows you to set legacy HTTP headers for your Next.js application, providing backward compatibility for older browsers or specific use cases.',
    },
    {
      id: 'next-29',
      category: 'Next.js',
      title: 'How do you implement SEO in Next.js?',
      answer: 'SEO in Next.js can be implemented by using the Head component to set meta tags, titles, and descriptions for each page. You can also use structured data and optimize images for better search engine visibility.',
    },
    {
      id: 'next-30',
      category: 'Next.js',
      title: 'What is the purpose of the next/amp module?',
      answer: 'The next/amp module allows you to create AMP (Accelerated Mobile Pages) in Next.js applications. It provides components and configuration options to build AMP-compliant pages.',
    }
]