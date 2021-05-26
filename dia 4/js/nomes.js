
var desenhos = [
    "Três espiãs demais",
    "Os padrinhos Mágicos",
    "Dragon Ball",
    "Caverna do Dragão",
    "Yu-Gi-Oh",
    "Avatar: A Lenda de Aang",
    "As Aventuras de Jackie Chan",
    "Digimon"
]  

var imagens = [
    "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2019/10/legiao_U5ENvRHieFsGuCDkZYwAxlpOJQn3PBK6oz2tqLIS_m.jpg.jpeg",
    "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2019/10/legiao_6bSzwLHpn07Ad9jJtoIEreugZ8UGyNRcYfWkaKMXs1.jpg.jpeg",
    "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2019/10/legiao_9OCp3wtmEcsBX7yrxbu84Pd1DGlUTR5SaYZ06ejAQk.jpg.jpeg",
    "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2019/10/legiao_CoOkTNP_2Ert83FjV5YJv9lGWh7eLAxIKD6Ba0cdsU.jpg.jpeg",
    "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2019/10/legiao_diHr6c8z5wD2Fb_EMq1ANaTgWVkCoGyf7tuBUp4sLQ.jpg.jpeg",
    "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2019/10/legiao_HjN_wlT21Db9LqZxERSVWf8OQ0GtB7crJPpui6FYak.jpg.jpeg",
    "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2019/10/legiao_iDR5VeOJlwsQhkPf_MLT9Hj6Ut7AE8KBb4pCZYond1.jpg.jpeg",
    "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2019/10/legiao_aJ2kIHunSY7FA96Z51RmO8tdVDEQLXjlpbCi4hwBNW.jpg.jpeg"



]

var links = [
    "https://www.youtube.com/watch?v=DqeVR58Zy-0",
    "https://www.youtube.com/watch?v=X4kY7v5RboQ",
    "https://www.youtube.com/watch?v=NXOyCfhhqfs",
    "https://www.youtube.com/watch?v=zAeJ3_Wwt5Q",
    "https://www.youtube.com/watch?v=5fUa75OWUlY&t=692s",
    "https://www.youtube.com/watch?v=IfCJ3TbxTLQ",
    "https://www.youtube.com/watch?v=amtaqJ7Yc2A",
    "https://www.youtube.com/watch?v=L3ELNiF8c0Q"
    
]



for (var i = 0; i < desenhos.length; i++){
    document.write(`
        <a href="${links[i]}" target="_blank">
            <div class="Desenhos" > 
                <img src = '${imagens[i]}'> 
                <div class="background" >
                    <h2> ${desenhos[i]} </h2>
                </div>
            </div>
        </a>`
    )
    
}




















