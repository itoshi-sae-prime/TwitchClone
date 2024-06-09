import React from "react";
const Member = [
    {
        img: "https://i.pinimg.com/736x/aa/ce/82/aace82ccd840565161459a634d0f69cc.jpg",
        name: "Jurgen",
        nickname: "Kloop",
        active: "w-2 h-2 bg-green-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/736x/02/64/44/0264443b1e01231063f0cf2da899e8bd.jpg",
        name: "Darwin Nunez",
        nickname: "G.O.A.T",
        active: "w-2 h-2 bg-red-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/736x/e9/0b/c2/e90bc290f1e63bf6f0a2f5044f4c81d9.jpg",
        name: "Mohammed Salah",
        nickname: "King Africa",
        active: "w-2 h-2 bg-red-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/564x/d5/84/03/d5840304b6bfa529d236b5065c075283.jpg",
        name: "T.A.Anold",
        nickname: "Captain FT",
        active: "w-2 h-2 bg-green-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/736x/39/0b/2f/390b2f6079e2310697e5d35ffed02769.jpg",
        name: "Virgil Dijk",
        nickname: "Captain Liv",
        active: "w-2 h-2 bg-green-500 rounded-lg lg:flex lg:justify-between lg:items-center",

        view: "17k"
    }, {
        img: "https://i.pinimg.com/564x/ea/49/b2/ea49b259cc1048eeb9d6b03bcd6b748a.jpg",
        name: "Alisson",
        nickname: "Thor",
        active: "w-2 h-2 bg-red-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/736x/9d/26/50/9d2650f020eb45211dd80b8bcf2257e7.jpg",
        name: "Roberson",
        nickname: "Mad Dog",
        active: "w-2 h-2 bg-green-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/736x/6e/ee/b1/6eeeb113354f18a61663db2952d4770d.jpg",
        name: "Thiago",
        nickname: "Magical",
        active: "w-2 h-2 bg-green-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/564x/28/7b/5c/287b5c18b2fe724a3381397be2e4f1dc.jpg",
        name: "Fỉrmino",
        nickname: "Bobby",
        active: "w-2 h-2 bg-green-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/564x/14/7b/73/147b73f77258681217bf1b54a99fbedf.jpg",
        name: "Szobozlai",
        nickname: "Szobo",
        active: "w-2 h-2 bg-red-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/564x/0d/07/12/0d0712a3c6e092d70077fe371bb1b4e9.jpg",
        name: "Alister",
        nickname: "Macca",
        active: "w-2 h-2 bg-red-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/564x/5c/46/b1/5c46b15bb2b86dac8b4e19971c6b00a5.jpg",
        name: "Luis Diaz",
        nickname: "Lucho",
        active: "w-2 h-2 bg-green-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/564x/cd/74/3c/cd743c6e13ded981ab7f912696731cb1.jpg",
        name: "Jones",
        nickname: "Cutis",
        active: "w-2 h-2 bg-red-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/736x/bc/bf/85/bcbf85c2c93d0e0c39cb4c9aff005e9f.jpg",
        name: "Mane",
        nickname: "Sadio",
        active: "w-2 h-2 bg-green-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/564x/fa/8d/22/fa8d2241d6ace39b300abff9c59fa584.jpg",
        name: "Matip",
        nickname: "Joel",
        active: "w-2 h-2 bg-red-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/564x/31/fd/57/31fd57c2c7ce39db6cb992fd7838ee60.jpg",
        name: "Henderson",
        nickname: "Hendo",
        active: "w-2 h-2 bg-green-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/564x/48/34/ff/4834ff93ff7616f1ef154d00cf79763f.jpg",
        name: "Endo",
        nickname: "Wataru",
        active: "w-2 h-2 bg-red-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
    {
        img: "https://i.pinimg.com/564x/d8/ca/c4/d8cac408b162ad2b864543e9b9650d6c.jpg",
        name: "Lallana",
        nickname: "Adam",
        active: "w-2 h-2 bg-green-500 rounded-lg lg:flex lg:justify-between lg:items-center",
        view: "17k"
    },
]
export default Member;