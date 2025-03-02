/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      spacing: {
        // For desktop resolution (1920x1080)
        "1px-vw": "0.05vw",
        "2px-vw": "0.10vw",
        "3px-vw": "0.16vw",
        "4px-vw": "0.21vw",
        "5px-vw": "0.26vw",
        "6px-vw": "0.31vw",
        "7px-vw": "0.36vw",
        "8px-vw": "0.42vw",
        "9px-vw": "0.47vw",
        "10px-vw": "0.52vw",
        "11px-vw": "0.57vw",
        "12px-vw": "0.63vw",
        "13px-vw": "0.68vw",
        "14px-vw": "0.73vw",
        "15px-vw": "0.78vw",
        "16px-vw": "0.83vw",
        "17px-vw": "0.89vw",
        "18px-vw": "0.94vw",
        "19px-vw": "0.99vw",
        "20px-vw": "1.04vw",
        "21px-vw": "1.09vw",
        "22px-vw": "1.15vw",
        "23px-vw": "1.20vw",
        "24px-vw": "1.25vw",
        "25px-vw": "1.30vw",
        "26px-vw": "1.35vw",
        "27px-vw": "1.41vw",
        "28px-vw": "1.46vw",
        "29px-vw": "1.51vw",
        "30px-vw": "1.56vw",
        "31px-vw": "1.61vw",
        "32px-vw": "1.67vw",
        "33px-vw": "1.72vw",
        "34px-vw": "1.77vw",
        "35px-vw": "1.82vw",
        "36px-vw": "1.88vw",
        "37px-vw": "1.93vw",
        "38px-vw": "1.98vw",
        "39px-vw": "2.03vw",
        "40px-vw": "2.08vw",
        "41px-vw": "2.14vw",
        "42px-vw": "2.19vw",
        "43px-vw": "2.24vw",
        "44px-vw": "2.29vw",
        "45px-vw": "2.34vw",
        "46px-vw": "2.40vw",
        "47px-vw": "2.45vw",
        "48px-vw": "2.50vw",
        "49px-vw": "2.55vw",
        "50px-vw": "2.60vw",
        "51px-vw": "2.66vw",
        "52px-vw": "2.71vw",
        "53px-vw": "2.76vw",
        "54px-vw": "2.81vw",
        "55px-vw": "2.86vw",
        "56px-vw": "2.92vw",
        "57px-vw": "2.97vw",
        "58px-vw": "3.02vw",
        "59px-vw": "3.07vw",
        "60px-vw": "3.13vw",
        "61px-vw": "3.18vw",
        "62px-vw": "3.23vw",
        "63px-vw": "3.28vw",
        "64px-vw": "3.33vw",
        "65px-vw": "3.39vw",
        "66px-vw": "3.44vw",
        "67px-vw": "3.49vw",
        "68px-vw": "3.54vw",
        "69px-vw": "3.59vw",
        "70px-vw": "3.65vw",
        "71px-vw": "3.70vw",
        "72px-vw": "3.75vw",
        "73px-vw": "3.80vw",
        "74px-vw": "3.85vw",
        "75px-vw": "3.91vw",
        "76px-vw": "3.96vw",
        "77px-vw": "4.01vw",
        "78px-vw": "4.06vw",
        "79px-vw": "4.11vw",
        "80px-vw": "4.17vw",
        "81px-vw": "4.22vw",
        "82px-vw": "4.27vw",
        "83px-vw": "4.32vw",
        "84px-vw": "4.38vw",
        "85px-vw": "4.43vw",
        "86px-vw": "4.48vw",
        "87px-vw": "4.53vw",
        "88px-vw": "4.58vw",
        "89px-vw": "4.64vw",
        "90px-vw": "4.69vw",
        "91px-vw": "4.74vw",
        "92px-vw": "4.79vw",
        "93px-vw": "4.84vw",
        "94px-vw": "4.90vw",
        "95px-vw": "4.95vw",
        "96px-vw": "5.00vw",
        "97px-vw": "5.05vw",
        "98px-vw": "5.10vw",
        "99px-vw": "5.16vw",
        "100px-vw": "5.21vw",

        // For mobile resolution (375x1080)
        "1px-mvw": "0.27vw",
        "2px-mvw": "0.53vw",
        "3px-mvw": "0.80vw",
        "4px-mvw": "1.07vw",
        "5px-mvw": "1.33vw",
        "6px-mvw": "1.60vw",
        "7px-mvw": "1.87vw",
        "8px-mvw": "2.13vw",
        "9px-mvw": "2.40vw",
        "10px-mvw": "2.67vw",
        "11px-mvw": "2.93vw",
        "12px-mvw": "3.20vw",
        "13px-mvw": "3.47vw",
        "14px-mvw": "3.73vw",
        "15px-mvw": "4.00vw",
        "16px-mvw": "4.27vw",
        "17px-mvw": "4.53vw",
        "18px-mvw": "4.80vw",
        "19px-mvw": "5.07vw",
        "20px-mvw": "5.33vw",
        "21px-mvw": "5.60vw",
        "22px-mvw": "5.87vw",
        "23px-mvw": "6.13vw",
        "24px-mvw": "6.40vw",
        "25px-mvw": "6.67vw",
        "26px-mvw": "6.93vw",
        "27px-mvw": "7.20vw",
        "28px-mvw": "7.47vw",
        "29px-mvw": "7.73vw",
        "30px-mvw": "8.00vw",
        "31px-mvw": "8.27vw",
        "32px-mvw": "8.53vw",
        "33px-mvw": "8.80vw",
        "34px-mvw": "9.07vw",
        "35px-mvw": "9.33vw",
        "36px-mvw": "9.60vw",
        "37px-mvw": "9.87vw",
        "38px-mvw": "10.13vw",
        "39px-mvw": "10.40vw",
        "40px-mvw": "10.67vw",
        "41px-mvw": "10.93vw",
        "42px-mvw": "11.20vw",
        "43px-mvw": "11.47vw",
        "44px-mvw": "11.73vw",
        "45px-mvw": "12.00vw",
        "46px-mvw": "12.27vw",
        "47px-mvw": "12.53vw",
        "48px-mvw": "12.80vw",
        "49px-mvw": "13.07vw",
        "50px-mvw": "13.33vw",
        "51px-mvw": "13.60vw",
        "52px-mvw": "13.87vw",
        "53px-mvw": "14.13vw",
        "54px-mvw": "14.40vw",
        "55px-mvw": "14.67vw",
        "56px-mvw": "14.93vw",
        "57px-mvw": "15.20vw",
        "58px-mvw": "15.47vw",
        "59px-mvw": "15.73vw",
        "60px-mvw": "16.00vw",
        "61px-mvw": "16.27vw",
        "62px-mvw": "16.53vw",
        "63px-mvw": "16.80vw",
        "64px-mvw": "17.07vw",
        "65px-mvw": "17.33vw",
        "66px-mvw": "17.60vw",
        "67px-mvw": "17.87vw",
        "68px-mvw": "18.13vw",
        "69px-mvw": "18.40vw",
        "70px-mvw": "18.67vw",
        "71px-mvw": "18.93vw",
        "72px-mvw": "19.20vw",
        "73px-mvw": "19.47vw",
        "74px-mvw": "19.73vw",
        "75px-mvw": "20.00vw",
        "76px-mvw": "20.27vw",
        "77px-mvw": "20.53vw",
        "78px-mvw": "20.80vw",
        "79px-mvw": "21.07vw",
        "80px-mvw": "21.33vw",
        "81px-mvw": "21.60vw",
        "82px-mvw": "21.87vw",
        "83px-mvw": "22.13vw",
        "84px-mvw": "22.40vw",
        "85px-mvw": "22.67vw",
        "86px-mvw": "22.93vw",
        "87px-mvw": "23.20vw",
        "88px-mvw": "23.47vw",
        "89px-mvw": "23.73vw",
        "90px-mvw": "24.00vw",
        "91px-mvw": "24.27vw",
        "92px-mvw": "24.53vw",
        "93px-mvw": "24.80vw",
        "94px-mvw": "25.07vw",
        "95px-mvw": "25.33vw",
        "96px-mvw": "25.60vw",
        "97px-mvw": "25.87vw",
        "98px-mvw": "26.13vw",
        "99px-mvw": "26.40vw",
        "100px-mvw": "26.67vw",

        "1px-vh": "0.09vh",
        "2px-vh": "0.19vh",
        "3px-vh": "0.28vh",
        "4px-vh": "0.37vh",
        "5px-vh": "0.46vh",
        "6px-vh": "0.56vh",
        "7px-vh": "0.65vh",
        "8px-vh": "0.74vh",
        "9px-vh": "0.83vh",
        "10px-vh": "0.93vh",
        "11px-vh": "1.02vh",
        "12px-vh": "1.11vh",
        "13px-vh": "1.20vh",
        "14px-vh": "1.30vh",
        "15px-vh": "1.39vh",
        "16px-vh": "1.48vh",
        "17px-vh": "1.57vh",
        "18px-vh": "1.67vh",
        "19px-vh": "1.76vh",
        "20px-vh": "1.85vh",
        "21px-vh": "1.94vh",
        "22px-vh": "2.04vh",
        "23px-vh": "2.13vh",
        "24px-vh": "2.22vh",
        "25px-vh": "2.31vh",
        "26px-vh": "2.41vh",
        "27px-vh": "2.50vh",
        "28px-vh": "2.59vh",
        "29px-vh": "2.69vh",
        "30px-vh": "2.78vh",
        "31px-vh": "2.87vh",
        "32px-vh": "2.96vh",
        "33px-vh": "3.06vh",
        "34px-vh": "3.15vh",
        "35px-vh": "3.24vh",
        "36px-vh": "3.33vh",
        "37px-vh": "3.43vh",
        "38px-vh": "3.52vh",
        "39px-vh": "3.61vh",
        "40px-vh": "3.70vh",
        "41px-vh": "3.80vh",
        "42px-vh": "3.89vh",
        "43px-vh": "3.98vh",
        "44px-vh": "4.07vh",
        "45px-vh": "4.17vh",
        "46px-vh": "4.26vh",
        "47px-vh": "4.35vh",
        "48px-vh": "4.44vh",
        "49px-vh": "4.54vh",
        "50px-vh": "4.63vh",
        "51px-vh": "4.72vh",
        "52px-vh": "4.81vh",
        "53px-vh": "4.91vh",
        "54px-vh": "5.00vh",
        "55px-vh": "5.09vh",
        "56px-vh": "5.18vh",
        "57px-vh": "5.27vh",
        "58px-vh": "5.36vh",
        "59px-vh": "5.46vh",
        "60px-vh": "5.55vh",
        "61px-vh": "5.64vh",
        "62px-vh": "5.73vh",
        "63px-vh": "5.82vh",
        "64px-vh": "5.91vh",
        "65px-vh": "6.01vh",
        "66px-vh": "6.10vh",
        "67px-vh": "6.19vh",
        "68px-vh": "6.28vh",
        "69px-vh": "6.37vh",
        "70px-vh": "6.46vh",
        "71px-vh": "6.56vh",
        "72px-vh": "6.65vh",
        "73px-vh": "6.74vh",
        "74px-vh": "6.83vh",
        "75px-vh": "6.92vh",
        "76px-vh": "7.02vh",
        "77px-vh": "7.11vh",
        "78px-vh": "7.20vh",
        "79px-vh": "7.29vh",
        "80px-vh": "7.39vh",
        "81px-vh": "7.48vh",
        "82px-vh": "7.57vh",
        "83px-vh": "7.66vh",
        "84px-vh": "7.75vh",
        "85px-vh": "7.85vh",
        "86px-vh": "7.94vh",
        "87px-vh": "8.03vh",
        "88px-vh": "8.12vh",
        "89px-vh": "8.21vh",
        "90px-vh": "8.31vh",
        "91px-vh": "8.40vh",
        "92px-vh": "8.49vh",
        "93px-vh": "8.58vh",
        "94px-vh": "8.68vh",
        "95px-vh": "8.77vh",
        "96px-vh": "8.86vh",
        "97px-vh": "8.95vh",
        "98px-vh": "9.04vh",
        "99px-vh": "9.14vh",
        "100px-vh": "9.23vh", 
        "150px-vw":"7.81vw",

        // For mobile resolution (375x1080) in vh
        "1px-mvh": "0.11vh",
        "2px-mvh": "0.22vh",
        "3px-mvh": "0.33vh",
        "4px-mvh": "0.44vh",
        "5px-mvh": "0.55vh",
        "6px-mvh": "0.66vh",
        "7px-mvh": "0.77vh",
        "8px-mvh": "0.88vh",
        "9px-mvh": "0.99vh",
        "10px-mvh": "1.10vh",
        "11px-mvh": "1.21vh",
        "12px-mvh": "1.32vh",
        "13px-mvh": "1.43vh",
        "14px-mvh": "1.54vh",
        "15px-mvh": "1.65vh",
        "16px-mvh": "1.76vh",
        "17px-mvh": "1.87vh",
        "18px-mvh": "1.98vh",
        "19px-mvh": "2.09vh",
        "20px-mvh": "2.20vh",
        "21px-mvh": "2.31vh",
        "22px-mvh": "2.42vh",
        "23px-mvh": "2.53vh",
        "24px-mvh": "2.64vh",
        "25px-mvh": "2.75vh",
        "26px-mvh": "2.86vh",
        "27px-mvh": "2.97vh",
        "28px-mvh": "3.08vh",
        "29px-mvh": "3.19vh",
        "30px-mvh": "3.30vh",
        "31px-mvh": "3.41vh",
        "32px-mvh": "3.52vh",
        "33px-mvh": "3.63vh",
        "34px-mvh": "3.74vh",
        "35px-mvh": "3.85vh",
        "36px-mvh": "3.96vh",
        "37px-mvh": "4.07vh",
        "38px-mvh": "4.18vh",
        "39px-mvh": "4.29vh",
        "40px-mvh": "4.40vh",
        "41px-mvh": "4.51vh",
        "42px-mvh": "4.62vh",
        "43px-mvh": "4.73vh",
        "44px-mvh": "4.84vh",
        "45px-mvh": "4.95vh",
        "46px-mvh": "5.06vh",
        "47px-mvh": "5.17vh",
        "48px-mvh": "5.28vh",
        "49px-mvh": "5.39vh",
        "50px-mvh": "5.50vh",
        "51px-mvh": "5.61vh",
        "52px-mvh": "5.72vh",
        "53px-mvh": "5.83vh",
        "54px-mvh": "5.94vh",
        "55px-mvh": "6.05vh",
        "56px-mvh": "6.16vh",
        "57px-mvh": "6.27vh",
        "58px-mvh": "6.38vh",
        "59px-mvh": "6.49vh",
        "60px-mvh": "6.60vh",
        "61px-mvh": "6.71vh",
        "62px-mvh": "6.82vh",
        "63px-mvh": "6.93vh",
        "64px-mvh": "7.04vh",
        "65px-mvh": "7.15vh",
        "66px-mvh": "7.26vh",
        "67px-mvh": "7.37vh",
        "68px-mvh": "7.48vh",
        "69px-mvh": "7.59vh",
        "70px-mvh": "7.70vh",
        "71px-mvh": "7.81vh",
        "72px-mvh": "7.92vh",
        "73px-mvh": "8.03vh",
        "74px-mvh": "8.14vh",
        "75px-mvh": "8.25vh",
        "76px-mvh": "8.36vh",
        "77px-mvh": "8.47vh",
        "78px-mvh": "8.58vh",
        "79px-mvh": "8.69vh",
        "80px-mvh": "8.80vh",
        "81px-mvh": "8.91vh",
        "82px-mvh": "9.02vh",
        "83px-mvh": "9.13vh",
        "84px-mvh": "9.24vh",
        "85px-mvh": "9.35vh",
        "86px-mvh": "9.46vh",
        "87px-mvh": "9.57vh",
        "88px-mvh": "9.68vh",
        "89px-mvh": "9.79vh",
        "90px-mvh": "9.90vh",
        "91px-mvh": "10.01vh",
        "92px-mvh": "10.12vh",
        "93px-mvh": "10.23vh",
        "94px-mvh": "10.34vh",
        "95px-mvh": "10.45vh",
        "96px-mvh": "10.56vh",
        "97px-mvh": "10.67vh",
        "98px-mvh": "10.78vh",
        "99px-mvh": "10.89vh",
        "100px-mvh": "11.00vh",
      },
      fontSize: {
        // for desktop
        "14px-vw": "0.73vw",
        "18px-vw": "1vw",
        "16px-vw": "0.83vw",
        "32px-vw": "1.67vw",
        "20px-vw": "1.04vw",
        "22px-vw": "1.15vw",
        "24px-vw": "1.24vw",
        "28px-vw": "1.46vw",
        "40px-vw": "2.08vw",
        "48px-vw": "2.5vw",

        // for mobile
        "12px-mvw": "3.20vw",
        "14px-mvw": "3.73vw",
        "16px-mvw": "4.27vw",
        "24px-mvw": "6.4vw",
        "18px-mvw": "4.8vw",
        "32px-mvw": "8.53vw",
        "44px-mvw": "11.73vw",
      },
      fontWeight: {
        bold: "700",
        medium: "500",
        regular: "400",
        semiBold: "600",
        book: "400",
      },
      lineHeight: {
        "1.77vw": "1.77vw",
      },
      borderWidth: {
        0.5: "0.5px", // Adds 0.5px border width
      },
    },
  },
  plugins: [],
};
