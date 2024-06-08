/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html","./index1.html","./index2.html","./index3.html","./index4.html","./index5.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        padding: '2rem',

        },
        translate: {
          '4.25': '17rem',
        }
      },
      height:{
        '900':'900px',
        '800':'800px',
        '700':'700px',
        '650':'650px',

        '600':'600px',

        '500':'500px',
        '448':'448px',

        '450':'450px',
        '400':'400px',
        '390':'390px',
        '380':'380px',
        '370':'370px',
        '360':'360px',
        '350':'350px',
        '340':'340px',

        '300':'300px',
        '200':'200px',
        '100':'100px',
      },
      screens: {
        'sm': '640px' ,
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
      
  },
  plugins: [
    require('flowbite/plugin')
    
  ],
}
