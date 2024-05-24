

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}




const questions = shuffleArray([
    {
        //burçların pozitif özellikleri
        questionId:"1",
        questionText: 'Koç burcunun pozitif özellikleri nelerdir?',
        answerOptions: shuffleArray ([
            { answerText: ["Mantıklı",",","Çalışkan",",","Mesafeli"], isCorrect: false },
            { answerText: ["Orjinal",",","Yenilikçi",",","İnsancıl"], isCorrect: false },
            { answerText: ["Enerjik",",","Coşkulu",",","Lider Ruhlu"], isCorrect: true },
            { answerText: ["Tutkulu",",","Sadık",",","Ketum"], isCorrect: false },
        ],)
    },
    {
        questionId:"2",
        questionText: 'Boğa burcunun pozitif özellikleri nelerdir?',
        answerOptions: shuffleArray([
            { answerText: ["Lider",",","Enerjik",",","İdealist"], isCorrect: false },
            { answerText: ["Sabırlı",",","Sadık",",","Üretken"], isCorrect: true },
            { answerText: ["Tutkulu",",","Becerikli",",","Uyanık"], isCorrect: false },
            { answerText: ["Fedakar",",","Empatik",",","Romantik"], isCorrect: false },
        ],)
    },
    {
        questionId:"3",
        questionText: 'İkizler burcunun pozitif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Entellektüel",",","Hazırcevap",",","Sosyal"], isCorrect: true },
            { answerText: ["Anaç",",","Yuvaya Düşkün",",","Duygusal"], isCorrect: false },
            { answerText: ["Lider",",","Enerjik",",","İdealist"], isCorrect: false },
            { answerText: ["Çalışkan",",","Detaycı",",","Kuralları Olan"], isCorrect: false },
        ],)
    },
    {
        questionId:"4",
        questionText: 'Yengeç burcunun pozitif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Çalışkan",",","Detaycı",",","Kuralları Olan"], isCorrect: false },
            { answerText: ["Entellektüel",",","Hazırcevap",",","Sosyal"], isCorrect: false },
            { answerText: ["Fedakar",",","Empatik",",","Romantik"], isCorrect: false },
            { answerText: ["Anaç",",","Yuvaya Düşkün",",","Duygusal"], isCorrect: true },
        ],)
    },

    {
        questionId:"5",
        questionText: 'Aslan burcunun pozitif özellikleri nelerdir?',
        answerOptions: shuffleArray([
            { answerText: ["Entellektüel",",","Hazırcevap",",","Sosyal"], isCorrect: false },
            { answerText: ["Anaç",",","Yuvaya Düşkün",",","Duygusal"], isCorrect: false },
            { answerText: ["Mantıklı",",","Çalışkan",",","Mesafeli"], isCorrect: false },
            { answerText: ["Lider",",","Enerjik",",","İdealist"], isCorrect: true },
        ],)
    },

    {
        questionId:"6",
        questionText: 'Başak burcunun pozitif özellikleri nelerdir?',
        answerOptions: shuffleArray([
            { answerText: ["Anaç",",","Yuvaya Düşkün",",","Duygusal"], isCorrect: false },
            { answerText: ["Arkadaş Canlısı",","," Hoşgörülü",",","Tatlı Dilli"], isCorrect: false },
            { answerText: ["Özgürlüğü Seven",","," Cömert",",","Açık Fikirli"], isCorrect: false },
            { answerText: ["Çalışkan",",","Detaycı",",","Kuralları Olan"], isCorrect: true },
        ],)
    },

    {
        questionId:"7",
        questionText: 'Terazi burcunun pozitif özellikleri nelerdir?',
        answerOptions: shuffleArray([
            { answerText: ["Entellektüel",",","Hazırcevap",",","Sosyal"], isCorrect: false },
            { answerText: ["Çalışkan",",","Detaycı",",","Kuralları Olan"], isCorrect: false },
            { answerText: ["Arkadaş Canlısı",","," Hoşgörülü",",","Tatlı Dilli"], isCorrect: true },
            { answerText: ["Özgürlüğü Seven",","," Cömert",",","Açık Fikirli"], isCorrect: false },
        ],)
    },

    {
        questionId:"8",
        questionText: 'Akrep burcunun pozitif özellikleri nelerdir?',
        answerOptions: [
            { answerText: ["Özgürlüğü Seven",","," Cömert",",","Açık Fikirli"], isCorrect: false },
            { answerText: ["Tutkulu",",","Becerikli",",","Uyanık"], isCorrect: true },
            { answerText: ["Anaç",",","Yuvaya Düşkün",",","Duygusal"], isCorrect: false },
            { answerText: ["Arkadaş Canlısı",","," Hoşgörülü",",","Tatlı Dilli"], isCorrect: false },
        ],
    },

    {
        questionId:"9",
        questionText:'Yay burcunun pozitif özellikleri nelerdir?',
        answerOptions: shuffleArray([
            { answerText: ["Entellektüel",",","Hazırcevap",",","Sosyal"], isCorrect: false },
            { answerText: ["Çalışkan",",","Detaycı",",","Kuralları Olan"], isCorrect: false },
            { answerText: ["Arkadaş Canlısı",","," Hoşgörülü",",","Tatlı Dilli"], isCorrect: false },
            { answerText: ["Özgürlüğü Seven",","," Cömert",",","Açık Fikirli"], isCorrect: true },
        ],)
    },

    {
        questionId:"10",
        questionText: 'Oğlak burcunun pozitif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Mantıklı",",","Çalışkan",",","Mesafeli"], isCorrect: true },
            { answerText: ["Özgürlüğü Seven",","," Cömert",",","Açık Fikirli"], isCorrect: false },
            { answerText: ["Tutkulu",",","Becerikli",",","Uyanık"], isCorrect: false },
            { answerText: ["Anaç",",","Yuvaya Düşkün",",","Duygusal"], isCorrect: false },
        ],)
    },

    {
        questionId:"11",
        questionText: 'Kova burcunun pozitif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Orjinal",",","Yenilikçi",",","İnsancıl"], isCorrect: true },
            { answerText: ["Anaç",",","Yuvaya Düşkün",",","Duygusal"], isCorrect: false },
            { answerText: ["Tutkulu",",","Becerikli",",","Uyanık"], isCorrect: false },
            { answerText: ["Enerjik",",","Coşkulu",",","Lider Ruhlu"], isCorrect: false },
        ],)
    },

    {
        questionId:"12",
        questionText: 'Balık burcunun pozitif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Enerjik",",","Coşkulu",",","Lider Ruhlu"], isCorrect: false },
            { answerText: ["Fedakar",",","Empatik",",","Romantik"], isCorrect: true },
            { answerText: ["Orjinal",",","Yenilikçi",",","İnsancıl"], isCorrect: false },
            { answerText: ["Özgürlüğü Seven",","," Cömert",",","Açık Fikirli"], isCorrect: false },
        ],)
    },

    {
        //burçların negatif özellikleri
        questionId:"13",
        questionText: 'Koç burcunun negatif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Sabit Görüşlü",",","Ukala",",","Kibirli"], isCorrect: false },
            { answerText: ["Aceleci",",","Bencil",",","Çabuk Sinirlenen"], isCorrect: true },
            { answerText: ["Melankolik",",","Tembel",",","Kötümser"], isCorrect: false },
            { answerText: ["Gamsız",","," Abartan",",","Fanatik"], isCorrect: false },
        ],)
    },

    {
       
        questionId:"14",
        questionText: 'Boğa burcunun negatif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Diktatör",",","Müsrif",",","Buyurgan"], isCorrect: false },
            { answerText: ["Çabuk Sıkılan",",","Değişken",",","Dağınık Fikirli "], isCorrect: false },
            { answerText: ["Maddiyatçı",",","Esnek Olmayan",",","Yenilikten Hoşlanmayan"], isCorrect: true },
            { answerText: ["Kararsız",","," Yüzelsel",",","Kolay Vazgeçebilen"], isCorrect: false },
        ],)
    },

    {
       
        questionId:"15",
        questionText: 'İkizler burcunun negatif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Gamsız",","," Abartan",",","Fanatik"], isCorrect: false },
            { answerText: ["Şüpheci",",","Gergin",",","Zor Beğenen "], isCorrect: false },
            { answerText: ["Melankolik",",","Tembel",",","Kötümser"], isCorrect: false },
            { answerText: ["Çabuk Sıkılan",",","Değişken",",","Dağınık Fikirli "], isCorrect: true },
        ],)
    },

    {
       
        questionId:"16",
        questionText: 'Yengeç burcunun negatif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Alıngan",","," Duygusal",",","Şantajcı"], isCorrect: true },
            { answerText: ["Kararsız",","," Yüzelsel",",","Kolay Vazgeçebilen"], isCorrect: false },
            { answerText: ["Sabit Görüşlü",",","Ukala",",","Kibirli"], isCorrect: false },
            { answerText: ["Maddiyatçı",",","Esnek Olmayan",",","Yenilikten Hoşlanmayan"], isCorrect: false },
        ],)
    },

    {
       
        questionId:"17",
        questionText: 'Aslan burcunun negatif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Alıngan",","," Duygusal",",","Şantajcı"], isCorrect: false },
            { answerText: ["Diktatör",",","Müsrif",",","Buyurgan"], isCorrect: true },
            { answerText: ["Sabit Görüşlü",",","Ukala",",","Kibirli"], isCorrect: false },
            { answerText: ["Otoriter",",","Egoist",",","Küstah"], isCorrect: false },
        ],)
    },

    {
       
        questionId:"18",
        questionText: 'Başak burcunun negatif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Kararsız",","," Yüzelsel",",","Kolay Vazgeçebilen"], isCorrect: false },
            { answerText: ["Şüpheci",",","Gergin",",","Zor Beğenen "], isCorrect: true },
            { answerText: ["Sabit Görüşlü",",","Ukala",",","Kibirli"], isCorrect: false },
            { answerText: ["Otoriter",",","Egoist",",","Küstah"], isCorrect: false },
        ],)
    },

    {
       
        questionId:"19",
        questionText: 'Terazi burcunun negatif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Kararsız",","," Yüzelsel",",","Kolay Vazgeçebilen"], isCorrect: true },
            { answerText: ["Maddiyatçı",",","Esnek Olmayan",",","Yenilikten Hoşlanmayan"], isCorrect: false },
            { answerText: ["Sabit Görüşlü",",","Ukala",",","Kibirli"], isCorrect: false },
            { answerText: ["Diktatör",",","Müsrif",",","Buyurgan"], isCorrect: false },
        ],)
    },

    {
       
        questionId:"20",
        questionText: 'Akrep burcunun negatif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Kararsız",","," Yüzelsel",",","Kolay Vazgeçebilen"], isCorrect: false },
            { answerText: ["Melankolik",",","Tembel",",","Kötümser"], isCorrect: false },
            { answerText: ["Kinci ",",","Kuşkucu",",","Şüpheci"], isCorrect: true },
            { answerText: ["Sabit Görüşlü",",","Ukala",",","Kibirli"], isCorrect: false },
        ],)
    },

    {
       
        questionId:"21",
        questionText: 'Yay burcunun negatif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Kinci",",","Kuşkucu",",","Şüpheci"], isCorrect: false },
            { answerText: ["Melankolik",",","Tembel",",","Kötümser"], isCorrect: false },
            { answerText: ["Gamsız",","," Abartan",",","Fanatik"], isCorrect: true },
            { answerText: ["Sabit Görüşlü",",","Ukala",",","Kibirli"], isCorrect: false },
        ],)
    },

    {
       
        questionId:"22",
        questionText: 'Oğlak burcunun negatif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Sabit Görüşlü",",","Ukala",",","Kibirli"], isCorrect: false },
            { answerText: ["Otoriter",",","Egoist",",","Küstah"], isCorrect: true },
            { answerText: ["Gamsız",","," Abartan",",","Fanatik"], isCorrect: false },
            { answerText: ["Melankolik",",","Tembel",",","Kötümser"], isCorrect: false },
        ],)
    },

    {
       
        questionId:"23",
        questionText: 'Kova burcunun negatif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Sabit Görüşlü",",","Ukala",",","Kibirli"], isCorrect: true },
            { answerText: ["Aceleci",",","Bencil",",","Çabuk Sinirlenen"], isCorrect: false },
            { answerText: ["Alıngan",","," Duygusal",",","Şantajcı"], isCorrect: false },
            { answerText: ["Maddiyatçı",",","Esnek Olmayan",",","Yenilikten Hoşlanmayan"], isCorrect: false },
        ],)
    },

    {
       
        questionId:"24",
        questionText: 'Balık burcunun negatif özellikleri nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: ["Aceleci",",","Bencil",",","Çabuk Sinirlenen"], isCorrect: false },
            { answerText: ["Diktatör",",","Müsrif",",","Buyurgan"], isCorrect: false },
            { answerText: ["Alıngan",","," Duygusal",",","Şantajcı"], isCorrect: false },
            { answerText: ["Melankolik",",","Tembel",",","Kötümser"], isCorrect: true },
        ],)
    },

    {
       //ev konuları
        questionId:"25",
        questionText: '1.Ev konuları nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: "Sağlık, hastalıklar, rahatsızlıklar, zayıflıklar, günlük rutin işler. Evcil hayvanlar.", isCorrect: false },
            { answerText: "Başkalarının bilmesini istemediğimiz sırlarımız. Gizli kapaklı işler, bilinçaltı, kendi kendini tüketmek.", isCorrect: false },
            { answerText: "Kardeşler, komşular, içinde yaşadığımız yakın çevre.Eğitim, iletişim, yazılı sözlü anlaşmalar. Bilgi. Haber.", isCorrect: false },
            { answerText: "Ruhumuz/öz benliğimiz/Karakterimiz. Yaradan tarafından kişiye bahşedilen YETENEKLER. Vücut yapısı.", isCorrect: true },
        ],)
    },

    {
     
         questionId:"26",
         questionText: '2.Ev konuları nelerdir?',
         answerOptions:shuffleArray( [
             { answerText: "Parasal konular-maddi kazanımlar. Kişinin sahip olduğu maddi kaynaklar. Para kazanma ve harcama şeklimiz. Kendimize verdiğimiz öz değer.", isCorrect: true },
             { answerText: "Ailemiz, ebeveynlerimiz, atalarımız, köklerimiz. Anavatanımız, kalıtımsal özelliklerimiz, çocukluk yıllarımız, gizli servetler. Taşınmaz mallar.", isCorrect: false },
             { answerText: "Evlilik ve ortaklar. İkili ilişkilerimizi, partnerimiz. Açık düşmanlar, rakipler, rekabet. ", isCorrect: false },
             { answerText: "Dini konular, yabancı ülkeler, yüksek eğitim, hukuksal konular.", isCorrect: false },
         ],)
     },

     {
     
        questionId:"27",
        questionText: '3.Ev konuları nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: "Kariyer, meslek, ün, itibar, sosyal statü, saygınlık, toplum önünde göründüğümüz alan. ", isCorrect: false },
            { answerText: "Arkadaşlar, sosyal çevre, gruplar, dernekler.", isCorrect: false },
            { answerText: "Kardeşler, komşular, içinde yaşadığımız yakın çevre.Eğitim, iletişim, yazılı sözlü anlaşmalar. Bilgi. Haber.", isCorrect: true },
            { answerText: "Eşin veya ortağın parası(Başkalarından gelen para). Miras. Sırlar, ölüm ve ölüm ötesi konuları, ruhsal ve fiziksel yenilenme. ", isCorrect: false },
        ],)
    },

    {
     
        questionId:"28",
        questionText: '4.Ev konuları nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: "Sağlık, hastalıklar, rahatsızlıklar, zayıflıklar, günlük rutin işler. Evcil hayvanlar. ", isCorrect: false },
            { answerText: "Dini konular, yabancı ülkeler, yüksek eğitim, hukuksal konular.", isCorrect: false },
            { answerText: "Ailemiz, ebeveynlerimiz, atalarımız, köklerimiz. Anavatanımız, kalıtımsal özelliklerimiz, çocukluk yıllarımız, gizli servetler. Taşınmaz mallar.", isCorrect: true },
            { answerText: "Parasal konular-maddi kazanımlar. Kişinin sahip olduğu maddi kaynaklar. Para kazanma ve harcama şeklimiz. Kendimize verdiğimiz öz değer. ", isCorrect: false },
        ],)
    },

    {
     
        questionId:"29",
        questionText: '5.Ev konuları nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: "Çocuklar, aşk ilişkileri. Eğlence, yaratıcılık, hobiler, şans oyunları.", isCorrect: true },
            { answerText: "Evlilik ve ortaklar. İkili ilişkilerimizi, partnerimiz. Açık düşmanlar, rakipler, rekabet. ", isCorrect: false },
            { answerText: "Ailemiz, ebeveynlerimiz, atalarımız, köklerimiz. Anavatanımız, kalıtımsal özelliklerimiz, çocukluk yıllarımız, gizli servetler. Taşınmaz mallar.", isCorrect: false },
            { answerText: "Arkadaşlar, sosyal çevre, gruplar, dernekler.", isCorrect: false },
        ],)
    },

    {
     
        questionId:"30",
        questionText: '6.Ev konuları nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: "Kardeşler, komşular, içinde yaşadığımız yakın çevre.Eğitim, iletişim, yazılı sözlü anlaşmalar. Bilgi. Haber.", isCorrect: false },
            { answerText: "Ruhumuz/öz benliğimiz/Karakterimiz. Yaradan tarafından kişiye bahşedilen YETENEKLER. Vücut yapısı.", isCorrect: false },
            { answerText: "Sağlık, hastalıklar, rahatsızlıklar, zayıflıklar, günlük rutin işler. Evcil hayvanlar.", isCorrect: true },
            { answerText: "Kariyer, meslek, ün, itibar, sosyal statü, saygınlık, toplum önünde göründüğümüz alan. ", isCorrect: false },
        ],)
    },

    {
     
        questionId:"31",
        questionText: '7.Ev konuları nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: "Kardeşler, komşular, içinde yaşadığımız yakın çevre.Eğitim, iletişim, yazılı sözlü anlaşmalar. Bilgi. Haber.", isCorrect: false },
            { answerText: "Parasal konular-maddi kazanımlar. Kişinin sahip olduğu maddi kaynaklar. Para kazanma ve harcama şeklimiz. Kendimize verdiğimiz öz değer.", isCorrect: false },
            { answerText: "Evlilik ve ortaklar. İkili ilişkilerimizi, partnerimiz. Açık düşmanlar, rakipler, rekabet. ", isCorrect: true },
            { answerText: "Dini konular, yabancı ülkeler, yüksek eğitim, hukuksal konular. ", isCorrect: false },
        ],)
    },

    {
     
        questionId:"32",
        questionText: '8.Ev konuları nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: "Eşin veya ortağın parası(Başkalarından gelen para). Miras. Sırlar, ölüm ve ölüm ötesi konuları, ruhsal ve fiziksel yenilenme. ", isCorrect: true },
            { answerText: "Çocuklar, aşk ilişkileri. Eğlence, yaratıcılık, hobiler, şans oyunları.", isCorrect: false },
            { answerText: "Başkalarının bilmesini istemediğimiz sırlarımız. Gizli kapaklı işler, bilinçaltı, kendi kendini tüketmek. ", isCorrect: false },
            { answerText: "Ailemiz, ebeveynlerimiz, atalarımız, köklerimiz. Anavatanımız, kalıtımsal özelliklerimiz, çocukluk yıllarımız, gizli servetler. Taşınmaz mallar.", isCorrect: false },
        ],)
    },

    {
     
        questionId:"33",
        questionText: '9.Ev konuları nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: "Arkadaşlar, sosyal çevre, gruplar, dernekler. ", isCorrect: false },
            { answerText: "Kariyer, meslek, ün, itibar, sosyal statü, saygınlık, toplum önünde göründüğümüz alan. ", isCorrect: false },
            { answerText: "Sağlık, hastalıklar, rahatsızlıklar, zayıflıklar, günlük rutin işler. Evcil hayvanlar.", isCorrect: false },
            { answerText: "Dini konular, yabancı ülkeler, yüksek eğitim, hukuksal konular.", isCorrect: true },
        ],)
    },

    {
     
        questionId:"34",
        questionText: '10.Ev konuları nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: "Başkalarının bilmesini istemediğimiz sırlarımız. Gizli kapaklı işler, bilinçaltı, kendi kendini tüketmek. ", isCorrect: false },
            { answerText: "Kariyer, meslek, ün, itibar, sosyal statü, saygınlık, toplum önünde göründüğümüz alan.  ", isCorrect: true },
            { answerText: "Ruhumuz/öz benliğimiz/Karakterimiz. Yaradan tarafından kişiye bahşedilen YETENEKLER. Vücut yapısı.", isCorrect: false },
            { answerText: "Kardeşler, komşular, içinde yaşadığımız yakın çevre.Eğitim, iletişim, yazılı sözlü anlaşmalar. Bilgi. Haber.", isCorrect: false },
        ],)
    },

    {
     
        questionId:"35",
        questionText: '11.Ev konuları nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: "Parasal konular-maddi kazanımlar. Kişinin sahip olduğu maddi kaynaklar. Para kazanma ve harcama şeklimiz. Kendimize verdiğimiz öz değer.", isCorrect: false },
            { answerText: "Arkadaşlar, sosyal çevre, gruplar, dernekler.", isCorrect: true },
            { answerText: "Kariyer, meslek, ün, itibar, sosyal statü, saygınlık, toplum önünde göründüğümüz alan. ", isCorrect: false },
            { answerText: "Ailemiz, ebeveynlerimiz, atalarımız, köklerimiz. Anavatanımız, kalıtımsal özelliklerimiz, çocukluk yıllarımız, gizli servetler. Taşınmaz mallar.", isCorrect: false },
        ],)
    },

    {
     
        questionId:"36",
        questionText: '12.Ev konuları nelerdir?',
        answerOptions:shuffleArray( [
            { answerText: "Başkalarının bilmesini istemediğimiz sırlarımız. Gizli kapaklı işler, bilinçaltı, kendi kendini tüketmek.", isCorrect: true },
            { answerText: "Evlilik ve ortaklar. İkili ilişkilerimizi, partnerimiz. Açık düşmanlar, rakipler, rekabet. ", isCorrect: false },
            { answerText: "Sağlık, hastalıklar, rahatsızlıklar, zayıflıklar, günlük rutin işler. Evcil hayvanlar. ", isCorrect: false },
            { answerText: "Ruhumuz/öz benliğimiz/Karakterimiz. Yaradan tarafından kişiye bahşedilen YETENEKLER. Vücut yapısı.", isCorrect: false },
        ],)
    },

    {
     //gezegenler
        questionId:"37",
        questionText: 'KOÇ Burcunun yönetici gezegeni hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Mars", isCorrect: true },
            { answerText: "Güneş", isCorrect: false },
            { answerText: "Jüpiter", isCorrect: false },
            { answerText: "Venüs", isCorrect: false },
        ],)
    },

    {
  
           questionId:"38",
           questionText: 'BOĞA Burcunun yönetici gezegeni hangisidir?',
           answerOptions:shuffleArray( [
               { answerText: "Ay", isCorrect: false },
               { answerText: "Satürn", isCorrect: false },
               { answerText: "Jüpiter", isCorrect: false },
               { answerText: "Venüs", isCorrect: true },
           ],)
       },

       {
  
        questionId:"39",
        questionText: 'İKİZLER Burcunun yönetici gezegeni hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Mars", isCorrect: false },
            { answerText: "Merkür", isCorrect: true },
            { answerText: "Güneş", isCorrect: false },
            { answerText: "Satürn", isCorrect: false },
        ],)
    },

    {
  
        questionId:"40",
        questionText: 'YENGEÇ Burcunun yönetici gezegeni hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Venüs", isCorrect: false },
            { answerText: "Ay", isCorrect: true },
            { answerText: "Güneş", isCorrect: false },
            { answerText: "Jüpiter", isCorrect: false },
        ],)
    },

    {
  
        questionId:"41",
        questionText: 'ASLAN Burcunun yönetici gezegeni hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Jüpiter", isCorrect: false },
            { answerText: "Satürn", isCorrect: false },
            { answerText: "Güneş", isCorrect: true },
            { answerText: "Mars", isCorrect: false },
        ],)
    },

    {
  
        questionId:"42",
        questionText: 'BAŞAK Burcunun yönetici gezegeni hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Jüpiter", isCorrect: false },
            { answerText: "Güneş", isCorrect: false },
            { answerText: "Merkür", isCorrect: true },
            { answerText: "Venüs", isCorrect: false },
        ],)
    },

    {
  
        questionId:"43",
        questionText: 'TERAZİ Burcunun yönetici gezegeni hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Mars", isCorrect: false },
            { answerText: "Satürn", isCorrect: false },
            { answerText: "Merkür", isCorrect: false },
            { answerText: "Venüs", isCorrect: true },
        ],)
    },

    {
  
        questionId:"44",
        questionText: 'AKREP Burcunun yönetici gezegeni hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Mars", isCorrect: true },
            { answerText: "Jüpiter", isCorrect: false },
            { answerText: "Güneş", isCorrect: false },
            { answerText: "Ay", isCorrect: false },
        ],)
    },

    {
  
        questionId:"45",
        questionText: 'YAY Burcunun yönetici gezegeni hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Satürn", isCorrect: false },
            { answerText: "Jüpiter", isCorrect: true },
            { answerText: "Venüs", isCorrect: false },
            { answerText: "Mars", isCorrect: false },
        ],)
    },

    {
  
        questionId:"46",
        questionText: 'OĞLAK Burcunun yönetici gezegeni hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Satürn", isCorrect: true },
            { answerText: "Jüpiter", isCorrect: false },
            { answerText: "Güneş", isCorrect: false },
            { answerText: "Merkür", isCorrect: false },
        ],)
    },

    {
  
        questionId:"47",
        questionText: 'KOVA Burcunun yönetici gezegeni hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Satürn", isCorrect: true },
            { answerText: "Venüs", isCorrect: false },
            { answerText: "Ay", isCorrect: false },
            { answerText: "Merkür", isCorrect: false },
        ],)
    },

    {
  
        questionId:"48",
        questionText: 'BALIK Burcunun yönetici gezegeni hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Mars", isCorrect: false },
            { answerText: "Venüs", isCorrect: false },
            { answerText: "Güneş", isCorrect: false },
            { answerText: "Jüpiter", isCorrect: true },
        ],)
    },

    {
  //elementler-nitelikler
        questionId:"49",
        questionText: 'KOÇ Burcunun elementi hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Ateş", isCorrect: true },
            { answerText: "Su", isCorrect: false },
            { answerText: "Toprak", isCorrect: false },
            { answerText: "Hava", isCorrect: false },
        ],)
    },

    {
  
        questionId:"50",
        questionText: 'BOĞA Burcunun elementi hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Ateş", isCorrect: false },
            { answerText: "Su", isCorrect: false },
            { answerText: "Toprak", isCorrect: true },
            { answerText: "Hava", isCorrect: false },
        ],)
    },

    {
  
        questionId:"51",
        questionText: 'İKİZLER Burcunun elementi hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Ateş", isCorrect: false },
            { answerText: "Su", isCorrect: false },
            { answerText: "Toprak", isCorrect: false },
            { answerText: "Hava", isCorrect: true },
        ],)
    },

    {
  
        questionId:"52",
        questionText: 'YENGEÇ Burcunun elementi hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Ateş", isCorrect: false },
            { answerText: "Su", isCorrect: true },
            { answerText: "Toprak", isCorrect: false },
            { answerText: "Hava", isCorrect: false },
        ],)
    },

    {
  
        questionId:"53",
        questionText: 'ASLAN Burcunun elementi hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Ateş", isCorrect: true },
            { answerText: "Su", isCorrect: false },
            { answerText: "Toprak", isCorrect: false },
            { answerText: "Hava", isCorrect: false },
        ],)
    },

    {
  
        questionId:"54",
        questionText: 'BAŞAK Burcunun elementi hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Ateş", isCorrect: false },
            { answerText: "Su", isCorrect: false },
            { answerText: "Toprak", isCorrect: true },
            { answerText: "Hava", isCorrect: false },
        ],)
    },

    {
  
        questionId:"55",
        questionText: 'TERAZİ Burcunun elementi hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Ateş", isCorrect: false },
            { answerText: "Su", isCorrect: false },
            { answerText: "Toprak", isCorrect: false },
            { answerText: "Hava", isCorrect: true },
        ],)
    },

    {
  
        questionId:"56",
        questionText: 'AKREP Burcunun elementi hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Ateş", isCorrect: false },
            { answerText: "Su", isCorrect: true },
            { answerText: "Toprak", isCorrect: false },
            { answerText: "Hava", isCorrect: false },
        ],)
    },

    {
  
        questionId:"57",
        questionText: 'YAY Burcunun elementi hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Ateş", isCorrect: true },
            { answerText: "Su", isCorrect: false },
            { answerText: "Toprak", isCorrect: false },
            { answerText: "Hava", isCorrect: false },
        ],)
    },

    {
  
        questionId:"58",
        questionText: 'OĞLAK Burcunun elementi hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Ateş", isCorrect: false },
            { answerText: "Su", isCorrect: false },
            { answerText: "Toprak", isCorrect: true },
            { answerText: "Hava", isCorrect: false },
        ],)
    },

    {
  
        questionId:"59",
        questionText: 'KOVA Burcunun elementi hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Ateş", isCorrect: false },
            { answerText: "Su", isCorrect: false },
            { answerText: "Toprak", isCorrect: false },
            { answerText: "Hava", isCorrect: true },
        ],)
    },

    {
  
        questionId:"60",
        questionText: 'BALIK Burcunun elementi hangisidir?',
        answerOptions:shuffleArray( [
            { answerText: "Ateş", isCorrect: false },
            { answerText: "Su", isCorrect: true },
            { answerText: "Toprak", isCorrect: false },
            { answerText: "Hava", isCorrect: false },
        ],)
    },

    {
  
        questionId:"61",
        questionText: 'Ateş Elementinin Öncüsü hangi burçtur?',
        answerOptions:shuffleArray( [
            { answerText: "Yengeç", isCorrect: false },
            { answerText: "Koç", isCorrect: true },
            { answerText: "Terazi", isCorrect: false },
            { answerText: "Yay", isCorrect: false },
        ],)
    },

    {
  
        questionId:"62",
        questionText: 'Ateş Elementinin Sabiti hangi burçtur?',
        answerOptions:shuffleArray( [
            { answerText: "Koç", isCorrect: false },
            { answerText: "Aslan", isCorrect: true },
            { answerText: "Akrep", isCorrect: false },
            { answerText: "Yay", isCorrect: false },
        ],)
    },

    {
  
        questionId:"63",
        questionText: 'Ateş Elementinin Değişkeni hangi burçtur?',
        answerOptions:shuffleArray( [
            { answerText: "Balık", isCorrect: false },
            { answerText: "Yay", isCorrect: true },
            { answerText: "Başak", isCorrect: false },
            { answerText: "Aslan", isCorrect: false },
        ],)
    },

    {
  
        questionId:"64",
        questionText: 'Su Elementinin Öncüsü hangi burçtur?',
        answerOptions:shuffleArray( [
            { answerText: "Koç", isCorrect: false },
            { answerText: "Yengeç", isCorrect: true },
            { answerText: "Oğlak", isCorrect: false },
            { answerText: "Akrep", isCorrect: false },
        ],)
    },

    {
  
        questionId:"65",
        questionText: 'Su Elementinin Sabiti hangi burçtur?',
        answerOptions:shuffleArray( [
            { answerText: "Balık", isCorrect: false },
            { answerText: "Akrep", isCorrect: true },
            { answerText: "Terazi", isCorrect: false },
            { answerText: "Boğa", isCorrect: false },
        ],)
    },

    {
  
        questionId:"66",
        questionText: 'Su Elementinin Değişkeni hangi burçtur?',
        answerOptions:shuffleArray( [
            { answerText: "Yengeç", isCorrect: false },
            { answerText: "Balık", isCorrect: true },
            { answerText: "Başak", isCorrect: false },
            { answerText: "İkizler", isCorrect: false },
        ],)
    },

    {
  
        questionId:"67",
        questionText: 'Hava Elementinin Öncüsü hangi burçtur?',
        answerOptions:shuffleArray( [
            { answerText: "Oğlak", isCorrect: false },
            { answerText: "Terazi", isCorrect: true },
            { answerText: "Koç", isCorrect: false },
            { answerText: "İkizler", isCorrect: false },
        ],)
    },

    {
  
        questionId:"68",
        questionText: 'Hava Elementinin Sabiti hangi burçtur?',
        answerOptions:shuffleArray( [
            { answerText: "Boğa", isCorrect: false },
            { answerText: "Kova", isCorrect: true },
            { answerText: "Terazi", isCorrect: false },
            { answerText: "Akrep", isCorrect: false },
        ],)
    },

    {
  
        questionId:"69",
        questionText: 'Hava Elementinin Değişkeni hangi burçtur?',
        answerOptions:shuffleArray( [
            { answerText: "Balık", isCorrect: false },
            { answerText: "İkizler", isCorrect: true },
            { answerText: "Başak", isCorrect: false },
            { answerText: "Kova", isCorrect: false },
        ],)
    },

    {
  
        questionId:"70",
        questionText: 'Toprak Elementinin Öncüsü hangi burçtur?',
        answerOptions:shuffleArray( [
            { answerText: "Koç", isCorrect: false },
            { answerText: "Oğlak", isCorrect: true },
            { answerText: "Başak", isCorrect: false },
            { answerText: "Terazi", isCorrect: false },
        ],)
    },

    {
  
        questionId:"71",
        questionText: 'Toprak Elementinin Sabiti hangi burçtur?',
        answerOptions:shuffleArray( [
            { answerText: "Aslan", isCorrect: false },
            { answerText: "Boğa", isCorrect: true },
            { answerText: "Kova", isCorrect: false },
            { answerText: "Oğlak", isCorrect: false },
        ],)
    },

    {
  
        questionId:"72",
        questionText: 'Toprak Elementinin Değişkeni hangi burçtur?',
        answerOptions:shuffleArray( [
            { answerText: "Balık", isCorrect: false },
            { answerText: "Başak", isCorrect: true },
            { answerText: "Kova", isCorrect: false },
            { answerText: "Boğa", isCorrect: false },
        ],)
    },
]);


questions.length = 10;
shuffleArray(questions);



export default questions;