import React from 'react'
import "./planets.css"
import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
import venus from "../../img/venus.png"
import merkur from "../../img/merkur.png"
import mars from "../../img/mars.png"
import jupiter from "../../img/jupiter.png"
import saturn from "../../img/saturn.png"
import uranus from "../../img/uranus.png"
import neptun from "../../img/neptun.png"
import pluto from "../../img/pluto.png"



export default function Planets() {
  return (
    <>
     <div className='planetsTitle'>GEZEGENLER</div>
     <div className='planets'>
      
   

         <div className='planetContent'>

        <div className='kolom'>
          <div className='top'>
            <img src={sun} alt="" className='planetImg' />
          </div>
          <div className='center'>
            GÜNEŞ
          </div>
          <div className='bottom'>
            <p>YÖNETTİĞİ BURÇ: ASLAN</p>
            <p>GÜNEŞ, Eril–sıcak-kurudur. Herkesin güneşinin içsel hedefi, parlamaktır. Özellikle haritamızda hangi evde bulunuyorsa o ev konularında görünür olmak ve takdir edilmek isteriz. Güneşimiz bizim kimliğimizdir. Güneş; Eril enerjidir, hayatımızda ki otorite figürünü temsil eder. Kimlik duygumuz, yaratıcılığımız, bilinçli davranışlarımız ve egomuzdur. Canlılık, yaşam gücü, organizasyon, yaşam enerjisi, istek, gurur, doğuştan gelen karakterimizdir.
</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={moon} alt="" className='planetImg' />
        </div>
        <div className='center'>
         AY
        </div>
          <div className='bottom'>
          <p>YÖNETTİĞİ BURÇ: YENGEÇ</p>
          <p>AY,Dişi–soğuk–nemlidir. Duygularımız, hatıralarımız, alışkanlıklarımız, hafızamız, değişken ruh hallerimiz, içgüdüsel tepkilerimizdir. Astrolojide Ay: annemizdir, arzularımızdır. . Ay, bilinç dışını ve duygularımızı simgeler. Ay; haritanızın hangi evinde görürseniz burası sizin duygusal iniş çıkış yaşayacağınız alanınızdır ve değişkendir.
 </p>

          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={merkur} alt="" className='planetImg' />
        </div>
        <div className='center'>
        MERKÜR
        </div>
          <div className='bottom'>
          <p>YÖNETTİĞİ BURÇLAR: İKİZLER / BAŞAK</p>
          <p>MERKÜR, Hiçbir zaman güneşten 28 dereceden daha uzakta yer alamaz. Cinssiz kabul edilir. Taklitçidir, iyiyle iyi kötüyle kötü olur. Merkür; aklın gezegenidir,  iletişim, konuşma, algılama, aracılık, akıllılık, yazma, öğrenme, zekâ, analitik ve mantıklı düşünmeyi temsil eder. Doğum haritasındaki iletişimi ve koordinasyonu sağlayan odur. Konuşma kabiliyeti, el becerikliliğini merkür yönetir. Haritanızda merkürü gördüğünüz ev, sizin nerede ve nasıl daha iyi iletişim kurabileceğinizi gösterir.
</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={venus} alt="" className='planetImg' />
        </div>
        <div className='center'>
        VENÜS
        </div>
          <div className='bottom'>
          <p>YÖNETTİĞİ BURÇLAR: BOĞA / TERAZİ</p>
          <p>VENÜS,dişi–soğuk-nemlidir. AŞK gezegenidir. Güzellik, uyum, cazibe, sevgi, barış, iştah, damak tadı, estetik, eşler, renkler, şairler, tablolar, mücevherler, şarkıcılık, tiyatro ve müzik, sanatın her şekline Venüs hükmeder. Venüs'ün etkisi nazik ve uyumludur. Seksin değil, aşkın ve duygusallığın gezegenidir. Haritanızın hangi evinde ise orada gerçekten çok güzel vakit geçireceğinizi ve eğleneceğinizi ifade eder.  
 
</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={mars} alt="" className='planetImg' />
        </div>
        <div className='center'>
        MARS
        </div>
          <div className='bottom'>
          <p>YÖNETTİĞİ BURÇLAR: KOÇ / AKREP</p>
          <p> MARS= Eril – sıcak – kurudur. Atılganlık, savaşçı, fatih,  cesaret, hırs, güç, iş, mücadele, irade gücü, enerji, öfke, dürtüsellik, zorlama, kavga, yarışma, çekişme, hayvansal doğamız, arzularımız, seksüel enerjimizdir. Kişinin hayatta kalmak için nasıl mücadele ettiğini, nasıl hareket ettiğini, fiziksel enerjisini nasıl kullandığını gösterir. Marsın etkisi; kendini zorla kabul ettirme, zorba ve yıkıcıdır. Etkileri hem kızgınlıkla ve yıkıcılıkla savaşırken, hem de cesaret ve kararlılıkla kullanılabilir. Haritanız da Mars ı gördüğünüz yer enerjinizin doruk noktada olduğu yerdir. Mars enerjidir.

</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={jupiter} alt="" className='planetImg' />
        </div>
        <div className='center'>
        JÜPİTER
        </div>
          <div className='bottom'>
          <p>YÖNETTİĞİ BURÇLAR: YAY / BALIK</p>
          <p>.   Genişleme, yayılma, şans, refah, başarı, hoşgörü, iyimserlik, adalet, fırsat, cömertlik, büyümek, büyük işler, yüksek düşünce, ahlaki değerler, yüksek öğrenim, arzular, spor, savurganlık, abartmayı  kapsar. Jüpiter büyüten enerjiye sahiptir. Jüpiter; verir, korur, yardım eder, büyütür, gururlandırır, cesaret verir, öğüt verir ve filozofça düşündürür. Fiziksel, ahlaksal ve düşünsel açıdan büyütme enerjisine sahiptir. Her şeyi gereğin den fazla büyütebilir. Haritanız da Jüpiter’in olduğu alan şansınızın iyi olacağı, fırsatların bizi büyüteceği alandır. </p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={saturn} alt="" className='planetImg' />
        </div>
        <div className='center'>
        SATÜRN
        </div>
          <div className='bottom'>
          <p>YÖNETTİĞİ BURÇLAR: OĞLAK / KOVA</p>
          <p>Güneş’e en uzak gezegendir. Soğuk ve karanlıktır. Sorumluluk, disiplin, sağlamlaştırma, amaç, hedef, sınırlar, koşullar, kısıtlamalar, yapılandırma, tedbir, ciddiyet, engelleme, gecikme, korku, depresyon, karamsarlık, baba, ihtiyarlık, devlet otoritesi.  Satürn; geciktirir, kısıtlar, yasaklar, geliştirir ve derinleştirir. Endişe ve kuruntuya neden olur. Satürn ün bulunduğu yerde aşılması gereken engeller, sarf edilmesi gereken çabalar, gayretler bulunur. 
Satürn ile baş edebilmenin tek yolu; DİSİPLİN ve SABIR dır.
</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={uranus} alt="" className='planetImg' />
        </div>
        <div className='center'>
        URANÜS
        </div>
          <div className='bottom'>
          <p>KOLLEKTİF GEZEGEN / YÖNETTİĞİ BURÇ: KOVA</p>
          <p>Uranüs; Yaratıcı geleceği, ani değişmeleri, devrimleri ve diktatörleri, yalnızlığı, yaratıcılığı, isyanları kapsar. Özgürlük dürtüsünü temsil eder, aşırılıkların ve ani değişiklerin gezegenidir. Yararlılığını bitirmiş, miyadını doldurmuş  eski davranış biçimlerini değiştirir. Yeni gelmeden önce eski imha edilmelidir. Uranüs enerjisi elektrik enerjisidir.Bu sebepten dolayı; şimşek gibi gelen düşünceleri, birden bire içe doğan bilgileri, hiç beklenmedik gelişmeleri, sürprizleri, şokları, felci simgeler.Haritanızda bulunduğu alan;  sıra dışı bir şeyler yapmak istediğiniz zamanda ve yerdedir. 
</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={neptun} alt="" className='planetImg' />
        </div>
        <div className='center'>
        NEPTÜN
        </div>
          <div className='bottom'>
         <p>KOLLEKTİF GEZEGEN / YÖNETTİĞİ BURÇ: BALIK</p>
         <p>Neptün en derin özlemleri, idealizimi ve kolektif bilinçdışını simgeler. Sezgi ve ilhamla bağdaştırılan Neptün; kozmik bir anten ya da yol gösterici bir melek gibidir. Mantığın tükendiği bir noktada rüyalar, vizyonlar ve semboller kanalıyla ne tarafa gidilmesi gerektiğini gösteren bir fonksiyondur. Sisin ve bulanıklığın sembolü olduğu gibi saf bir algıyı ve netleşmeyi de simgeler. Neptün haritanızın neresinde ise orada kendinizi ve çevrenizdekileri aldatacağınız ama aynı zamanda ideal olanı arayacağınız yerdir.

</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={pluto} alt="" className='planetImg' />
        </div>
        <div className='center'>
        PLUTON
        </div>
          <div className='bottom'>
          <p>KOLLEKTİF GEZEGEN / YÖNETTİĞİ BURÇ: AKREP</p>
          <p>. Plüton; yeraltına ve gözle görünmeyene hükmeder. İçimizdeki bilinmeyen dünyaları, bastırdığımız duyguları, bilinçaltımızı kapsar. Plüton; kütleleri atıkları, yıkımları, atom gücünü ve suçluları ele alır. Yavaş yavaş büyümeyi, değiştirilmeyi, başlangıçları ve bitişleri, doğumu ve ölümü, kendini dış dünyadan ayırmayı, baskıyı, zorlamayı, yok olmayı, kaçırılmayı, belirsizliği, bakterileri ve virüsleri yönetir. Doğumu, bozulmayı (dejenere olmayı) ve yeniden doğuşu temsil eder. Plüton’un etkisi; yavaş, can sıkıcı ve kaçınılmazdır.   
</p>
          </div>
        </div>

      </div>
    </div>
    </>

  )
}
