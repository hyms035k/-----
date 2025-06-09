/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/*.js",    // srcフォルダ以下のJS
  ],
  theme: {
    // カスタムブレークポイントの定義
    screens: {
      'sm': '640px',   // Tailwind CSSのデフォルト 'sm'
      'md': '768px',   // ユーザー指定のBP
      'lg': '992px',   // ユーザー指定のBP
      'xl': '1200px',  // ユーザー指定のBP
      '2xl': '1367px', // ユーザー指定のBP
    },

    // .container クラスのカスタマイズ
    container: {
      center: true, // コンテナを中央揃えにする
      padding: {
        DEFAULT: '1.25rem',
        md: '15px'
      },
      screens: {
        sm: '640px',
        md: '650px',
        lg: '870px',
        xl: '1070px',
        '2xl': '1170px',
      },
    },
    extend: {
      fontFamily: {
        // デフォルトのサンセリフフォントを Kiwi Maru に設定
        sans: ['"Kiwi Maru"', 'sans-serif'],
        // 見出し等で使用するセリフフォントとして Bree Serif を設定
        serif: ['"Bree Serif"', 'serif'],
        roboto: ['"roboto"', 'serif'],
        mplus: ['"M PLUS 1"', 'sans-serif']
      },
    }
  },
  plugins: [],
}

