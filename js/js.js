//Profile--------------------------------------------------------------------------------------
document.getElementById('profile').onclick = funcProfile;
function funcProfile(){
    document.getElementById("penjelasan").innerHTML = 
    `<div>
        <h1 class="text-4xl font-bold text-blue-900 tracking-wide">I Dewa Putu Setiawan</h1>
        <p class="text-xl font-bold tracking-widest">IT Engineer</p>
        <p class="text-justify">Saya merupakan orang yang berpikir dengan logika dan sangat tertarik dengan suatu hal baru, terutama dalam bidang teknologi informasi. Ketertarikan saya dalam mempelajari hal baru sangat berperan penting dalam mengikuti perkembangan teknologi informasi yang maju sangat cepat.</p>
        <p class="ttd text-3xl font-thin transform -rotate-6">Setiawan.</p>
    </div>`
}

//Graduation------------------------------------------------------------------------------------
document.getElementById("skill").onclick = funcSkill;
function funcSkill(){
    document.getElementById("penjelasan").innerHTML = 
    `<div class="flex flex-wrap">
        <span class="border-2 rounded border-gray-800 text-gray-800 px-3 m-2 text-base font-bold hover:bg-gray-800 hover:text-white">HTML</span>
        <span class="border-2 rounded border-gray-800 text-gray-800 px-3 m-2 text-base font-bold hover:bg-gray-800 hover:text-white">CSS</span>
        <span class="border-2 rounded border-gray-800 text-gray-800 px-3 m-2 text-base font-bold hover:bg-gray-800 hover:text-white">Javascript</span>
        <span class="border-2 rounded border-gray-800 text-gray-800 px-3 m-2 text-base font-bold hover:bg-gray-800 hover:text-white">PHP</span>
        <span class="border-2 rounded border-gray-800 text-gray-800 px-3 m-2 text-base font-bold hover:bg-gray-800 hover:text-white">MySQL</span>
        <span class="border-2 rounded border-gray-800 text-gray-800 px-3 m-2 text-base font-bold hover:bg-gray-800 hover:text-white">React JS</span>
        <span class="border-2 rounded border-gray-800 text-gray-800 px-3 m-2 text-base font-bold hover:bg-gray-800 hover:text-white">JSON</span>
        <span class="border-2 rounded border-gray-800 text-gray-800 px-3 m-2 text-base font-bold hover:bg-gray-800 hover:text-white">Rest API</span>
        <span class="border-2 rounded border-gray-800 text-gray-800 px-3 m-2 text-base font-bold hover:bg-gray-800 hover:text-white">Trainer Aplikasi</span>
        <span class="border-2 rounded border-gray-800 text-gray-800 px-3 m-2 text-base font-bold hover:bg-gray-800 hover:text-white">Installasi Aplikasi</span>
        <span class="border-2 rounded border-gray-800 text-gray-800 px-3 m-2 text-base font-bold hover:bg-gray-800 hover:text-white">Installasi Jaringan LAN</span>              
    </div>`
}

document.getElementById("graduation").onclick = funcGraduation;
function funcGraduation(){
    document.getElementById("penjelasan").innerHTML =
    `<div class="flex flex-col gap-y-10 w-full">
        <div>
            <p class="font-bold text text-gray-800 text-lg">Teknik Informatika</p>
            <p class="font-semibold text-gray-800">Sekolah Tinggi Manajemen Informatika & Komputer Indonesia</p>
            <p class="font-semibold text-gray-800">2016 - 2020</p>
         </div>
        <div>
            <p class="text-right font-bold text text-gray-800 text-lg">Teknik Komputer & Jaringan</p>
            <p class="text-right font-semibold text-gray-800">SMK TI Tunas Jakasampurna Bekasi</p>
            <p class="text-right font-semibold text-gray-800">2010 - 2013</p>
        </div>
    </div>`
}

document.getElementById("experience").onclick = funcExperience;
function funcExperience(){
    document.getElementById("penjelasan").innerHTML =
    `<div>
        <div class="flex flex-row justify-between font-bold text-xl tracking-widest"><span>TEKNISI</span><span>2015 - 2016</span></div>
        <br/>
        <h1 class="font-bold text-lg tracking-wide">Ciptama Computer</h1>
        <P class="text-justify">Selama 5 tahun bekerja sebagai teknisi dan trainer, saya telah menangani lebih dari 1000 pelanggan. Saya bertanggung jawab atas pemasangan aplikasi dan menjelaskan cara penggunaan aplikasi di pelanggan. Tanggung jawab lainnya yaitu memperbaiki dan memastikan aplikasi berfungsi dengan normal. Aplikasi tersebut diantaranya adalah POS retail, grosir, restaurant, dan aplikasi akuntansi.</P>
    </div>`
}

document.getElementById("certificate").onclick = funcCertificate;
function funcCertificate(){
    document.getElementById("penjelasan").innerHTML = 
    `<div>
        <p class="font-bold text-lg tracking-widest">MICROSOFT TECHNOLOGY ASSOCIATE</p>
        <p class="tracking-wide">HTML5 Application Development Fundamental</p>
    </div>`
}