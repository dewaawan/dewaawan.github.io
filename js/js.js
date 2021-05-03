//Profile--------------------------------------------------------------------------------------
document.getElementById('profile').onclick = funcProfile;
function funcProfile(){
    document.getElementById("penjelasan").innerHTML = 
    `<div class="text-default">
    <h1 class="text-4xl font-bold text-header-color tracking-wide">I Dewa Putu Setiawan</h1>
    <p class="text-xl font-semibold tracking-widest">IT Engineer</p>
    <p class="text-justify">Saya merupakan orang yang berpikir dengan logika dan sangat tertarik dengan suatu hal baru, terutama dalam bidang teknologi informasi. Ketertarikan saya dalam mempelajari hal baru sangat berperan penting dalam mengikuti perkembangan teknologi informasi yang maju sangat cepat.</p>
    <p class="ttd text-3xl font-thin transform -rotate-6">Setiawan.</p>
    </div>`
}

//Skill------------------------------------------------------------------------------------
document.getElementById("skill").onclick = funcSkill;
function funcSkill(){
    document.getElementById("penjelasan").innerHTML = 
    `<div class="text-default flex flex-col w-full">
        <div class="text-4xl font-bold text-header-color tracking-wide pb-5">What I Offer</div>
        <div class="flex flex-row">
            <div class="flex flex-col w-1/2">
                <span><i class="far fa-check-square"></i> HTML</span>
                <span><i class="far fa-check-square"></i> CSS</span>
                <span><i class="far fa-check-square"></i> Javascript</span>
                <span><i class="far fa-check-square"></i> PHP</span>
                <span><i class="far fa-check-square"></i> MySQL</span>
                <span><i class="far fa-check-square"></i> React JS</span>
            </div>
            <div class="flex flex-col w-1/2">
                <span><i class="far fa-check-square"></i> JSON</span>
                <span><i class="far fa-check-square"></i> Rest API</span>
                <span><i class="far fa-check-square"></i> Trainer</span>
                <span><i class="far fa-check-square"></i> Troubleshot PC</span>
                <span><i class="far fa-check-square"></i> Instalation LAN</span>
                <span><i class="far fa-check-square"></i> Instalation CCTV</span>
            </div>
        </div>
    </div>`
}

//Graduation---------------------------------------------------------------------------------
document.getElementById("graduation").onclick = funcGraduation;
function funcGraduation(){
    document.getElementById("penjelasan").innerHTML =
    `<div class="flex flex-col gap-y-10 w-full text-default">
        <div>
            <h1 class="text-4xl font-bold text-header-color tracking-wide">My Education</h1>
        </div>
        <div class="border-l-8 p-2 border border-default rounded-sm">
            <p class="">Teknik Informatika</p>
            <p class="">Sekolah Tinggi Manajemen Informatika & Komputer Indonesia</p>
            <p class="">2016 - 2020</p>
        </div>
        <div class="border-l-8 p-2 border border-default rounded-sm">
            <p class="">Teknik Komputer & Jaringan</p>
            <p class="">SMK TI Tunas Jakasampurna Bekasi</p>
            <p class="">2010 - 2013</p>
        </div>
    </div>`
}

//Experience------------------------------------------------------------------------------
document.getElementById("experience").onclick = funcExperience;
function funcExperience(){
    document.getElementById("penjelasan").innerHTML =
    `<div class="text-default">
        <h1 class="text-4xl font-bold text-header-color tracking-wide pb-5">Awesome Journey</h1>
        <div class="flex flex-row background-default text-dark-blue p-2 mb-2 justify-between font-bold text-xl tracking-widest"><span>TEKNISI</span><span>2015 - 2020</span></div>
        <h1 class="mx-3 font-bold text-lg mb-1 tracking-wide">Ciptama Computer</h1>
        <P class="mx-3 text-justify pb-2">Selama 5 tahun bekerja sebagai teknisi dan trainer, saya telah menangani lebih dari 1000 pelanggan. Saya bertanggung jawab atas pemasangan aplikasi dan menjelaskan cara penggunaan aplikasi di pelanggan. Tanggung jawab lainnya yaitu memperbaiki dan memastikan aplikasi berfungsi dengan normal. Aplikasi tersebut diantaranya adalah POS retail, grosir, restaurant, dan aplikasi akuntansi.</P>
    </div>`
}

//Contact-------------------------------------------------------------------------------
document.getElementById("contact").onclick = funcContact;
function funcContact(){
    document.getElementById("penjelasan").innerHTML = 
    `<div class="text-default w-full">
    <h1 class="text-4xl font-bold text-header-color tracking-wide pb-5">Contact Me On</h1>
    <p><i class="fas fa-envelope"></i> idewa02setiawan@gmail.com</p>
    <p><i class="fas fa-phone"></i> 0821 4646 6442</p>
    <p><i class="fab fa-instagram"></i> notdewa</p>
    </div>`
}