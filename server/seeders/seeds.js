const db = require('../config/connection');
const { Nft, User } = require('../models');
const userDataArray = require('./mockUserData');
const commentData = require('./mockCommentData');
const nftOwnerCreator = require('./mockNftOwnerCreator');

const nfts = [
  {
    "nftName": "Cool Cat #4814",
    "imageUrl": "https://lh3.googleusercontent.com/uQmS-2SW7vOB2skwJBKJPAjVtOuGtWBZKJZ5rl45DMCPyji0jrNKw0pJBdiuOKNydmt9JwjY6d7Zww8yQe8ftBgmxxPf2DXHjqaZ=w600",
  },
  {
    "nftName": "Cool Cat #9189",
    "imageUrl": "https://lh3.googleusercontent.com/eYEwDyojBF3MO4HIacxfjRHOpj8OOu87SadpeRaJQYDf7KDdH0N7EIQIUF-W06GZim1-V1UjWTEPgvgvGrBf7_DwHbLp70gg_a0DTA=s0",
  },
  {
    "nftName": "#775",
    "imageUrl": "https://lh3.googleusercontent.com/deIBeQ-SOix4NSlCcX0n0mKeISZtuxza6AkJqdBpyAQMOOyImGjEbRIP46yO3_-WspXhs10_nmNNJatIt3lwokDAvhSzi2Yv8vg5=s0",
  },
  {
    "nftName": "#3532",
    "imageUrl": "https://lh3.googleusercontent.com/tmDxtrM7y8dGsdMAZ-B598Y-GXkA_Eh0zOPhUMSKsKV71easUhB9_jlCUMMcgBgN0NlCNX6GqJR1HSnRW1_Qe3qrVgBmuMSQbsLUNw=w600",
  },
  {
    "nftName": "Fancy Bear #1723",
    "imageUrl": "https://lh3.googleusercontent.com/1YPUuosI4dyMZ2SFI5AUMXI8k_wIWggTn8Nu5o05dJl0waZM0psajYm21v_Xm_-IJTxmzA525b3zSM3ZzoYkNKvVfJu5Pw-1HcwnUQ=w600",
  },
  {
    "nftName": "Fancy Bear #7031",
    "imageUrl": "https://lh3.googleusercontent.com/Y9tek5GQkmcsIsDynLKbHvukmYrUhXkFqKRlsi4TgHOCde-w5pWyac8zDvLC9Z_yzBDm6x43niGMjjqU1qH77_ZUlE1sDW5YPW6TdZc=w600",
  },
  {
    "nftName": "Miner #7888",
    "imageUrl": "https://lh3.googleusercontent.com/B5ljxcrqtUb-JrPPbQNAihdRCM4R3sH_WMfzqduNbfr0MZ0pxBYnwTnJygu2D0RBvc-z3GZeh7et7hq0tMbPRK5PNVARg84co4zXXA=w600",
  },
  {
    "nftName": "Snack Time",
    "imageUrl": "https://lh3.googleusercontent.com/VoML45pMEjlXtvRVTLhd1Var0Ra_fW86PIRH-1lIoYQ98b0K6RZFW33g7nMJLVLUEzS3uSPZqxZ9K7yKJiw-ISzizIcw2tmtegHa7Q=w600",
  },
  {
    "nftName": "Pit Stop",
    "imageUrl": "https://lh3.googleusercontent.com/aYyijx9JqZLsBqBPV0jn1UcDLk74R-yJzA9z64vIW7bj6tD-apZ6wzvTyZ2Qr90d6JlXn_P7mwFVbkwfDKLifUHW3mEpdROWJ_GcOw=w600",
  },
  {
    "nftName": "Arcus",
    "imageUrl": "https://lh3.googleusercontent.com/Mas5J38DZdjT8oPwYP71Ltp1pZKPSGypm_HWsKIVdxWSaFj5JrAHfmvA1EBMR1AU-9a5MwP3sSMyQ08e0SXB2f54RBMELnpwotHz=w600",
  },
  {
    "nftName": "Kent Brockman Hasbulla",
    "imageUrl": "https://lh3.googleusercontent.com/tGZ8clWjLBV02Ioz36DgGCgnx5rEUOH7h7U8QJuunD-J4EKqp7YQ3hdGzTNi-6gt3F8cqhKRFRjfvChi0JicQbdTp3_JwzHVErk_Vw=w600",
  },
  {
    "nftName": "Dreamy",
    "imageUrl": "https://lh3.googleusercontent.com/XwgOY5oMdnSyrluJu9nSbCCbB2hqFYlodorGofEKYfGSvd8P7n_OF20AJheTKe3DIZymA66zjhq1w2v76AtNkmVskLKlfygqkt8_=w600",
  },
  {
    "nftName": "Joy of Pizza",
    "imageUrl": "https://lh3.googleusercontent.com/L8348gMEVC73DVBLrXQTq2mviWfHHUzsOKtxmjFY5QJT487n7lLMYXLLGo0T83gM3CjxY5sieJ-yColPU2eR6VmC4A=w600",
  },
  {
    "nftName": "Artvatar #5273",
    "imageUrl": "https://lh3.googleusercontent.com/h7_xU-sUM9jvqMteZVluvesQEGPRGtpH3tjvgkOt5TkiUo-QoeyS4ERsdTSpO3Bg6x4ACcEVZk9dSrXIC-i8DAhMb2i2g_zJ-ekWDYk=w600",
  },
  {
    "nftName": "Terry Crews",
    "imageUrl": "https://lh3.googleusercontent.com/jCTLLqeqoeh0HIQ9mM7EoIhSxEeDDlJzzv8Ap5MkQqzkCB2vIGMInoZvvx3mA5efGNp2zk_G8P0gZVKzRQH8DTeK_kDGqcvN-SWqIw=w600",
  },
  {
    "nftName": "Doodle #3423",
    "imageUrl": "https://lh3.googleusercontent.com/4bKioDNwioekVjuzIqckjt6EhyQBW-gkPClWnTnyHcAN3PWdFKxRURV8CD88wT6VEVmAye1FHrg_mpbEx61N8w7u3CrHN53581PW=w600",
  },
  {
    "nftName": "Land in Sandbox metaverse",
    "imageUrl": "https://lh3.googleusercontent.com/s6xN9lv_cI7KVxnKK3wwxBvZlwzGCPEwea2YW7WNWjSXxxeWtMgodOQUlV_T7sRybUwYbVrJLQxn6c6n9sq-ggJVN2EMqEE0Ov676Q=w600",
  },
  {
    "nftName": "Lucky Goat",
    "imageUrl": "https://lh3.googleusercontent.com/fnRiIlywQiJHN8NCJqqk9g0DnUadHIYEpLqoZUqVuS29BobiEB61CY0KEx_D2uOAN-nMSm8n2ghkUFDhMjxZBo1OelmV2iMRC5eh8OY=w600",
  },
  {
    "nftName": "Ross Ulbricht Genesis Collection",
    "imageUrl": "https://storage.opensea.io/files/75a674ab0f5d9f01f761c87dea112e6e.png",
  },
  {
    "nftName": "Archtype #397",
    "imageUrl": "https://lh3.googleusercontent.com/m--FW4ri9s6lLttI0Y-PwpSSufjaGH-01Co0bDMeaUg2r2WAT7Z4f6g201EeR1FJihIONchZ_8UnGFkFFYoMkh0Wx4l8FuNiH94w=w600",
  },
  {
    "nftName": "Parallel Masterpiece",
    "imageUrl": "https://lh3.googleusercontent.com/Dy7owTRAPLgYZ8ownJKHWbQgrdhjErFZCgQMpPbc0simmQcBaFiT7MG_yZYHxJ-u6KYQxk0xVfOG5BAqWkcpckXyDQwTZtSUJCLHTB0=w600",
  },
  {
    "nftName": "Autumnal Ambiguous Monsters",
    "imageUrl": "https://lh3.googleusercontent.com/sjvP-Phpy1EMVJu8ufR94zsEna5VJHCxd3vuukZ7Fa_feLZP6JsBC00cRGARXiuqWu4-darWPh_vFr4yRMs1tvs-=w600",
  },
  {
    "nftName": "Behind the king",
    "imageUrl": "https://storage.opensea.io/files/784adb92a5419484de1e69fcf2c8a59f.jpg",
  },
  {
    "nftName": "Cyberia",
    "imageUrl": "https://lh3.googleusercontent.com/huEY_Ho_hNASaGW4rarht76jAGQf5v0G1rT75ap25g1paL9ZTPxDfKYEip7POVDffvidP0MoaAe9zZUOll-g4q7_msHqNflr4K_wAA=w600",
  },
  {
    "nftName": "Arise",
    "imageUrl": "https://lh3.googleusercontent.com/Lk2zxhVi9S5FjIeT4dJHfQXC0v6miFW-nh4jF_WOuwHSJfdmYl4fKPtts-myngquydei-vxgDHOw8zNMC2lPf4oT_wQX3u1nLoJ8sQ=w600",
  },
  {
    "nftName": "Deep Black #398",
    "imageUrl": "https://lh3.googleusercontent.com/fhi6d-ZcZgSgBzFnaycZhlgFSs9zgaCpj6SCw8WjDK7wbk3zWoDs_ZbOrZi7_O_M-F-9TpjyU8PQzW6fW7ANOed8=w600",
  },
  {
    "nftName": "Deep Black #7166",
    "imageUrl": "https://lh3.googleusercontent.com/-cTkAFzVqLtYdypQM3YQU2InRSLSY24p0lNHhOMaq93gk7kAyRCiYfTKNGZrjGIdAQGmOoAfBRPnJxfE2lVENvSW=w600",
  },
  {
    "nftName": "We Rise NFT",
    "imageUrl": "https://lh3.googleusercontent.com/Y_NKe7TuWL_irhMoSOOgNBDY9LeKGPSH6t0zAmRBUZBllCFKGFH1gyVXrRIyB8z7zbr8MQu6aCFMFehiJMEJ2LMHk-qHW9j9SWjO=w600",
  },
  {
    "nftName": "Cheers",
    "imageUrl": "https://lh3.googleusercontent.com/nf3rwX17v3Jf4evpE9GKw-kRP7NxBli4lwCrx7WajkDR_Jy32SsoXYAX4sRojRFaP6YVnvOy01kELJrjbhbvnMJD7oLuuUgQ0O5I=w600",
  },
  {
    "nftName": "Cozy",
    "imageUrl": "https://lh3.googleusercontent.com/gXkply-ztvO86NX7-JqUajIFqVcv5lwoKcDfor36nh8N2stBNLjtNtEPx_D_7NbcSy7nQo9nucIthtypE7fV-G-eVHkyr9Ppd55wTA=w600",
  },
  {
    "nftName": "Seahorse Valley",
    "imageUrl": "https://storage.opensea.io/files/f48e104f9922cb7a8ea6bbc980eafe21.svg",
  },
  {
    "nftName": "Lucky Zero",
    "imageUrl": "https://lh3.googleusercontent.com/Wv1itaHj9nug_azmrw1lxzjeyhIoNo-0flaF7m4SO6ens2p43DGmlyNb08vGQBhK8X5-BDseQgfwbZhlAgfMr9fN6RfOJIvVvP28pW4=w600",
  },
  {
    "nftName": "#9039 Posty",
    "imageUrl": "https://lh3.googleusercontent.com/iKAD72v7BrnYgA6IYIkcWFAsbzNVSWwkmg-J_Mynhm9CWo6hzyL3x66H5fOCA-3b9Oo82sa_eUqHGipR-P1pMjct7d-DcMoIwQ0Osg=w600",
  },
  {
    "nftName": "Generative",
    "imageUrl": "https://storage.opensea.io/files/91be035a99f8d933c9d97be4b1116b0d.jpg",
  },
  {
    "nftName": "Denis",
    "imageUrl": "https://lh3.googleusercontent.com/9OM0W4PszW4xL1HxxmY9A8_j5V7QN9bUHCK8jkb4wGJpeK_mnraayxOWLcxs8g_rcdflvbolSP8fjuqgrYQ15e6DP9YScLif7EgJEg=w600",
  },
  {
    "nftName": "Bodhisattva Wow",
    "imageUrl": "https://storage.opensea.io/files/60493bb2b4ab98a76b9a4b61856cd911.png",
  },
  {
    "nftName": "Carl Rogers",
    "imageUrl": "https://storage.opensea.io/files/3376d0ab5a127dfc6b7a553a0e24f7ef.png",
  },
  {
    "nftName": "ARC Robot",
    "imageUrl": "https://lh3.googleusercontent.com/Oc_q6-5hSGHp9iXL9HplKN4FSlFB6FtxM2azWaFkr-KExSA8Rzb5mjUh0m10boeF0tz3b-8bsNBkSz5abAfyEvkrehSOyg9eSsU0fg=w600",
  },
  {
    "nftName": "Avid Lines",
    "imageUrl": "https://lh3.googleusercontent.com/8t4PJyKV5yBhpsvLDJ-rCLrkmwdas30DNfsOoIuGdpFwUpCAsyPXNZr135HXw9_TvlfnDbS3LyJm9FLSer4NtVNIQYKkMYeoCwYnXCM=w600",
  },
  {
    "nftName": "Northern Lights",
    "imageUrl": "https://lh3.googleusercontent.com/mp0O48XV7OXckPFCzD95bJcGUR5Svueive_jWuMZG-SSMGvnAvjSIBucMl0K4mZO1o8WzhR7efYOVHdDQfxx6BHBGRpX7UlbCYdw=w600",
  },
  {
    "nftName": "Genesis",
    "imageUrl": "https://lh3.googleusercontent.com/esjgKhGXegyhonI6UgA5h8-HKV1ewBBLTC6GdQbALoapOFA_Bx6nI2sXD2a6WS2uTjntw5VtMdjinrTBTBCNvkibKJD52NWCxuqgeA=w600",
  },
  {
    "nftName": "God of War",
    "imageUrl": "https://lh3.googleusercontent.com/cNzgcmWwQiHBv__nqXHmyB9bP0oveL5RD8_h8zfjGNiQmtbCaZTrOdCQVRiAg6_y55indgAaWQPIFAWXl8vj5S14vdPp56aw75b3=w600",
  },
  {
    "nftName": "Golden",
    "imageUrl": "https://lh3.googleusercontent.com/oJkzlzawLQamlD1Nhl3NpJ4zS0jWeEeddbAhVPso2R3GBTs-Zr1fL5wZsgJZAIxTY45O0CRDE1qwK3GVIDpUERx8-28BDnudzUK5v0g=w600",
  },
  {
    "nftName": "Poet",
    "imageUrl": "https://lh3.googleusercontent.com/tmcj9N1phEhbEx_S5OVvwGxgS1Hir19BFE0iOHFMxWCY-f2Xt0_Zef4yN4CqNzbZB_z3j6RN8l2heQDWrmtqw-xxBvNwo36Is1lh=w600",
  },
  {
    "nftName": "lil' Hero",
    "imageUrl": "https://lh3.googleusercontent.com/aGDwXHyTSgz06dmiFQZDPICClTkq0sYcqkM3wSieP5nEZfKRVK5ZIvBJNezfy8Vy4a2sW8-bYuyHLoLbS9DIaaWCa13-waRB7QuKVlk=w600",
  },
  {
    "nftName": "Pop Cat",
    "imageUrl": "https://lh3.googleusercontent.com/Otv8-c6FxYMyiSCpbnXJBazntmRk-xf4XhC6sy4WNVBSVDaY-ZcPQIgJGuh_t0V3E5sRZzQmH8KdvgHKhO-e3HR9qYQH-XATb8a4=w600",
  },
  {
    "nftName": "First Painting",
    "imageUrl": "https://storage.opensea.io/files/809515c2a485594171c546df04b852c9.png",
  },
  {
    "nftName": "Syd",
    "imageUrl": "https://lh3.googleusercontent.com/LNameJi2np5C6L9_LckDccWNlanJ0sy6IxIE63AQrTpJ90TiA42s2svhW0MC1jO21RNdfzf2u58YL4svAo5CsZj3=w600",
  },
  {
    "nftName": "Cryptomorie",
    "imageUrl": "https://lh3.googleusercontent.com/Um1CgcCecYJqiOSxnhQeP0cKjpLchCvrngbne62WhuJg5wSnng1QVAlARGfIGgqhkFdGSNRcqD3XwYAd4bfiq0TPKPjcT2ty6ZAd=w600",
  },
  {
    "nftName": "Moshi Man #222",
    "imageUrl": "https://lh3.googleusercontent.com/wkPeRRFbZWhjND8_gIc82IxQ4zyZgxEyCmFVuQPLn31jbw6SCjHhFoswU-6iMwL_Js3nEvq9elul9VTGa8T4rfGcyDfMk__gkytJCA=w600",
  },
  {
    "nftName": "KaijuKing #1273",
    "imageUrl": "https://lh3.googleusercontent.com/CHF9h7vXC9vy30MwWohhVdQ0ewm_iDqvlFhdno5UMbIDq0qT18KxPtfxSpxiXH-gxITtjwi7fXFU3cBBPZqN0CGk7oUMLRyiPQJCMA=w600",
  },
  {
    "nftName": "Azuki #3309",
    "imageUrl": "https://lh3.googleusercontent.com/8Zswj9nXSNCG2lgdcw20a3iNzzfoBb5b7gngk5nE06UYaU8h64_JihipMwF1hw7lKOOeJHPqBSCAc8wCUHq9MgcYgaGpRAlVAQIrCaU=w600",
  },
  {
    "nftName": "Creepy Shapeshifters",
    "imageUrl": "https://lh3.googleusercontent.com/xn_D2EaDMNjHI5NzIpsG_J7zrBY1UJBAE-eIKWtgixrXPFZ3XRmZnm2huqwT_EO8Twb2MV3GtnUCzSowXA9UtqYeTLYom5tKLc64fQ=w600",
  },
  {
    "nftName": "Cold Blooded Creep",
    "imageUrl": "https://lh3.googleusercontent.com/6n-mNqmlCq_EeSJVy8gj14UjY4QXStIqKVIATFnTU9xjCn2wKr0i8Tp25M4tzxL0Gls0pEsYlcpoHokIrjl2Pr9wefdlJAoNGQD88g=w600",
  },
  {
    "nftName": "Synth Wreckage",
    "imageUrl": "https://lh3.googleusercontent.com/Gn_N0qUgFmcnh7QVSjjFvgm3vc2LuMnoOTNUC5QkDicC8YkkC73sDoWRu-zvdCWhIkuSrxqM4zZSoZJeBHyzlV4cy3WGh1MnPu0QaA=w600",
  },
  {
    "nftName": "Hidden World",
    "imageUrl": "https://lh3.googleusercontent.com/uRAX3XabMO8rxPMfPMMN09PMdJsj2-Dp1X52j4i5z2Ds_BL4CuBw_nwMw_JJ1R0Ef0NoCUF-wOKiOypaORGjBLrA7TAfuSGeyC92GgE=w600",
  },
  {
    "nftName": "Moment #2",
    "imageUrl": "https://lh3.googleusercontent.com/peN-dohtJPrVs9Ta8QWFcLFpycOwAKkvjGxbEQ6-tHon5x-NiMdL05sTrmI0MpSxttKlNDTMiuZfSx5anEYlRZ4QuiBNedocG2fsRA=w600",
  },
  {
    "nftName": "Degen #9610",
    "imageUrl": "https://lh3.googleusercontent.com/-N5t3KrbTdD-pGumwpXfs0xD-KED6cAbK4MQkkujino9QUTX8ZGYaxL0ijwK4V8b8Ey2156n-VE-ZYKHC7iswsaP7h2ThSSosUCM6A=w600",
  },
  {
    "nftName": "Degen #7461",
    "imageUrl": "https://lh3.googleusercontent.com/aOGnbYGpMjt1mnm8EygQtgA7aOWK5VWUF8yZEbCr0zHXcWMjsga14R2kBhQgHFl-SGTSZjKtCSRovtg9j8Tz7nsjS0Yah5dpmVn6SA=w600",
  },
  {
    "nftName": "Angry Ape #2510",
    "imageUrl": "https://lh3.googleusercontent.com/NXmez6TjGPqU-mJC5ZulRNB4i9_CdUEj7CEpBdwRuxGoOg5VLWwAxwQ8n1vPYTDowO5k-lKJyyFs9vZz_sSKWWg6gJtk0kj38Zz_Qy0=w600",
  },
  {
    "nftName": "Human",
    "imageUrl": "https://lh3.googleusercontent.com/rX34fAjnuFeBJBD10bszLKijZpkVGnmYnNkllNl4VgvEgZLKjtNJAtHBdWYZCyuSQkKrLVUFg9U2cO-NaPIGsBRF2VJOqTpYY6N6INo=w600",
  },
  {
    "nftName": "Fangster",
    "imageUrl": "https://lh3.googleusercontent.com/pnWHkLU4mXeHGJ5b5SAMnBQYnTJhVbKN9WnRr7s1bJ9_SiCNFaBgycrRZX0c2eo8Xuo_4-KPuGiTMxnNVp0qjQSrwxnxBZ0RtgGkLTI=w600",
  },
  {
    "nftName": "Sherbet 4918",
    "imageUrl": "https://lh3.googleusercontent.com/pRPtEqRUAIphtL5dSnP2p1iaAs_vc1cM-UtDkqrIESw2hohjdjjQIaUxqBYj-N3pfpgv0j9DalmD6q1MSvhnqRxi1AqBU-Pr8PSV=w600",
  },
  {
    "nftName": "Baby Mouse",
    "imageUrl": "https://storage.opensea.io/files/e9f50ade75b9c075c98aa84ebe28f4a4.svg",
  },
  {
    "nftName": "Coffe Bean",
    "imageUrl": "https://storage.opensea.io/files/343f2a41cf0ae51b4860c01f02ab0ad4.svg",
  },
  {
    "nftName": "Ciggarete Butt",
    "imageUrl": "https://storage.opensea.io/files/78c2648f0ad09ca3823c26c51a1d3456.svg",
  },
  {
    "nftName": "Sunflower Seed",
    "imageUrl": "https://storage.opensea.io/files/921125ce42071328eda462be3b66210a.svg",
  },
  {
    "nftName": "Eternals",
    "imageUrl": "https://lh3.googleusercontent.com/AIPRL6513UsujhxKUI1qWDIr_FiGk8p736DBHbKrdBQ49Lj5ykPzl_1t8lZOldfjnq6OzFV3ExRyDQ8zwGkGOgSKjOnHoQEIeRjx8A=w600",
  },
  {
    "nftName": "Cryptoon Goon #6652",
    "imageUrl": "https://lh3.googleusercontent.com/0ANOcn76F0OhFkmnINji1EaOL0t2JH_JaldaeVBoOn2w4lm6NGEaC-bnKZst7ZjPXqaZAjIFTAOXyB0Bw3osS5yeIACUWHHw1wfk7A=w600",
  },
  {
    "nftName": "SupDuck",
    "imageUrl": "https://lh3.googleusercontent.com/wpR__35TtVoIk901kUvWXCmsQiy3NLkdp2N1L87cREk9TNme3VBhG_XTOhh5HwpXfjApPpMVPcWB8eUNvc6zaQAX2fYyjEP_SBDCLw=w600",
  },
  {
    "nftName": "Kongz",
    "imageUrl": "https://lh3.googleusercontent.com/wAlZwZEPQLYz2llWqjIC8DK5HWHnTHPp-_Yluuita3UKdirBc7aTEUEoN2bUG8QVierLjfyphPidElwCAP6npHDb5BCzG2a9q3IS4Q=w600",
  },
  {
    "nftName": "Pudgy Penguin",
    "imageUrl": "https://lh3.googleusercontent.com/6ZU65dNI0g58uimm04lj7lY8SI9zvCuDXCsUnXr0T96tBB-wIn3R0kfQ70vrCwfMuvNCtsvnhlYS9oQqU2T9PrMWVAh0i-_AK6trnQ=w600",
  },
  {
    "nftName": "Pengy Friends",
    "imageUrl": "https://lh3.googleusercontent.com/VJ-4axR9d6zku01IyZKqW1Zm9AbLP8Ddnrqle7g8NOaYZrCTWGZ36Y0Su1nGIgxszcm4LPiZC0y2ZsadPC7tKVHymlX4cRNgAdIBcg=w600",
  },
  {
    "nftName": "Coolman's Universe",
    "imageUrl": "https://lh3.googleusercontent.com/OEm99o5l8BZbr366m5EW0HS8JTN9hho_a8gNGyLRCoJRGA_mg6XlUTf3qKyS-JMa2v3RiCT5r74_FwYYkRWNfzbe2S7wrlkMzZkQXg=w600",
  },
  {
    "nftName": "Superfuzz: The Good Guys #3952",
    "imageUrl": "https://lh3.googleusercontent.com/gvwEjZlfE6qjJSI-ZBMKdfQ5MJh3oe1xPXqKzJoTnsQSLvYlTHoIFzCktHcV-A9F6Grfg8kBX-PxcSPIHAZViiy_RiYkamWfK-Ex7A=s0",
  },
  {
    "nftName": "Dream Machine #7115",
    "imageUrl": "https://lh3.googleusercontent.com/r4LAcVfG8SlS7pq4lChPMW9ldR0EiqUnbK_P3oTLAwk3pfkp69-PYooTZwvqlmrfuDh_VUtbuxAcHv5BR739m98p51jMMhSsu22hdw=w600",
  },
  {
    "nftName": "A Convocação #215",
    "imageUrl": "https://storage.opensea.io/files/97ca69c708c87190decd38b6f7dac64d.jpg",
  },
  {
    "nftName": "APE-X",
    "imageUrl": "https://lh3.googleusercontent.com/aqVxXcxT5B4QohoLkgHmNTXzIYzPqfzQ2hb4Cqb16T3yunnEhjGoirTp7DcyQhmYq1KPj9FCE9--7hGh06cMdD2xXl5YzLRqK9QYng=w600",
  },
  {
    "nftName": "Dystopit #0063",
    "imageUrl": "https://lh3.googleusercontent.com/XtwZi_SMEFcN25gfNYAH1yvMKf8Xx0QT9vaiqJyZrS6EDT2zNlGkcOcE6Yo-FpL0wlLS3inNmVQGe11CcZxOdnl6DvnCEwDopIoZFg=w600",
  },
  {
    "nftName": "CryptoPlayer Bucket #1",
    "imageUrl": "https://lh3.googleusercontent.com/tnLxG-J1Lkq1tSFrYQ-u9nHl-bXJSUQk8yNUtgHZh_D5J8FWSxIqtFJWbtSfYrQzz8_REN3mh5FaizT_woh26om0tNhM7eV_x23u=w600",
  },
  {
    "nftName": "Survivor #1011",
    "imageUrl": "https://lh3.googleusercontent.com/Jv3fcvFIknXTy2bOsuudFE_GdU9aSYkIX14wClw7tw-H_NdIwfaOKXZxjMXh_bcxlRrD4Lw3CV9xcEKIkLUFXkJQOtl438UexEbOog=w600",
  }



]

db.once('open', async () => {
  await Nft.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < userDataArray.length; i += 1) {
    const username = userDataArray[i].username;
    const email = userDataArray[i].email;
    const password = userDataArray[i].password;

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create nfts
  let createdNfts = [];
  for (let i = 0; i < nfts.length; i += 1) {
    const nftName = nfts[i].nftName;
    const creator = nftOwnerCreator[i].creator;
    const owner = nftOwnerCreator[i].owner;
    const imageUrl = nfts[i].imageUrl;

    const price = Math.random() * 50;
    const likes = Math.floor(Math.random() * 20);
    const nonLikes = Math.floor(Math.random() * 10);

    const createdNft = await Nft.create({ nftName, creator, owner, price, likes, nonLikes, imageUrl });

    createdNfts.push(createdNft);
  }

  // create comments
  for (let i = 0; i < 50; i += 1) {
    const commentBody = commentData[i].commentBody;

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomNftIndex = Math.floor(Math.random() * createdNfts.length);
    const { _id: nftId } = createdNfts[randomNftIndex];

    await Nft.updateOne(
      { _id: nftId },
      { $push: { comments: { commentBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});
