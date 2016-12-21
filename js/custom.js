function check_session(){
    $$('.ks-pb-standalone-dark').on('click', function () {
        photoBrowserDark.open();
    });
	$$('.news-one').on('click', function () {
        photoNewsOne.open();
    });
	$$('.news-two').on('click', function () {
        photoNewsTwo.open();
    });
	$$('.news-three').on('click', function () {
        photoNewsThree.open();
	});
	$$('.news-four').on('click', function () {
        photoNewsFour.open();
	});	
	$$('.news-five').on('click', function () {
        photoNewsFive.open();
	});
	$$('.news-six').on('click', function () {
        photoNewsSix.open();	
	});	
		
	/*var db = openDatabase('mydb1', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {
   tx.executeSql('CREATE TABLE IF NOT EXISTS program (id, instname,mainprogram)');
   tx.executeSql('DELETE FROM program');
   
 
}); */



	
	//alert("test");
		
}


function showdetails(instcode)	{
	
	if(instcode=='1122'){
		localStorage.setItem("current_hei","ABE International College of Business and Accountancy");
		localStorage.setItem("institution_head","Ms. Jeannie J. Bruan");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(075) 656-2028; (075) 568-8130");
		localStorage.setItem("fax","(075) 568-8130");
		localStorage.setItem("email","jalucas@amaes.edu.ph");
		localStorage.setItem("address","McArthur Highway, Urdaneta City, Pangasinan");
		
		$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
		
		
		
		
		
	}
	if(instcode=='1130'){
		localStorage.setItem("current_hei","AIE College, Inc. - Calasiao");
		localStorage.setItem("institution_head","Dr. Aveleo Q. Fuentes");
		localStorage.setItem("institution_head_title","President/Chief Executive Officer");
		localStorage.setItem("telno","(075) 517-6560");
		localStorage.setItem("fax","(075) 515-8051");
		localStorage.setItem("email","aiecollege_registrar@yahoo.com ");
		localStorage.setItem("address","Poblacion East, Calasiao, Pangasinan");
		
		$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
		
	}
	if(instcode=='1101'){
		localStorage.setItem("current_hei","AMA Computer College - Dagupan City");
		localStorage.setItem("institution_head","Mr. Joellin Glenn G. Rocili");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(075) 515-7182, (075) 523-1420");
		localStorage.setItem("fax","(075) 515-7182");
		localStorage.setItem("email","jggrocili@amaes.edu.ph,amaccdagupancampus@gmail.com");
		localStorage.setItem("address","Mayombo District, Dagupan City, Pangasinan");
		
		$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1108'){
		localStorage.setItem("current_hei","AMA Computer College - La Union");
		localStorage.setItem("institution_head","Ms. Minnie Teresita M. Maribbay");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(072) 242-6418");
		localStorage.setItem("fax","(072) 242-6418");
		localStorage.setItem("email","mtmmaribbay@amaes.edu.ph");
		localStorage.setItem("address","General Luna Street, City of San Fernando  , La Union");
		
		$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1102'){
		localStorage.setItem("current_hei","AMA Computer College - Laoag City");
		localStorage.setItem("institution_head","Mrs. Imee Jessica G. Nicolas");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(077) 771-7489; 770-4609");
		localStorage.setItem("fax","(077) 771-7488");
		localStorage.setItem("email","ijgnicolas@amaes.edu.ph");
		localStorage.setItem("address","Don E. Ruiz Street, Laoag City (Capital), Ilocos Norte");
		
		$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1005'){
		localStorage.setItem("current_hei","Asbury College");
		localStorage.setItem("institution_head","Ms. Minnie Teresita M. Maribbay");
		localStorage.setItem("institution_head_title","Director");
		localStorage.setItem("telno","(075) 557-5052");
		localStorage.setItem("fax","(075) 557-5052");
		localStorage.setItem("email","asburycollege_anda@gmail.com, asburycollege.anda@gmail.com");
		localStorage.setItem("address","Luna Street, Anda, Pangasinan");
		
		$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1006'){
		localStorage.setItem("current_hei","Asiacareer College Foundation, Inc.");
		localStorage.setItem("institution_head","Mr. Florencio Z. Reyno Jr. ");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 515-7685");
		localStorage.setItem("fax","(075) 515-7686");
		localStorage.setItem("email","asiacareer@ymail.com");
		localStorage.setItem("address","Perez Blvd, Dagupan City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1007'){
		localStorage.setItem("current_hei","Baccarra Medical Center School of Midwifery");
		localStorage.setItem("institution_head","Dr. Eduardo E. Padron, MD");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 670-3142; (077) 670-3150");
		localStorage.setItem("fax","(077) 670-3150");
		localStorage.setItem("email","bmc_1970@yahoo.com");
		localStorage.setItem("address","National Highway, Bacarra, Ilocos Norte");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1145'){
		localStorage.setItem("current_hei","Binalatongan Community College");
		localStorage.setItem("institution_head","Hon. Julier C. Resuello");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 5292059");
		localStorage.setItem("fax","(075) 5292059");
		localStorage.setItem("email","bcc_sccp@yahoo.com");
		localStorage.setItem("address","Brgy. Ilang, San Carlos City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1012'){
		localStorage.setItem("current_hei","CICOSAT College");
		localStorage.setItem("institution_head","Jacqueline Abella-Daciego, Ph. D.");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 607-1118");
		localStorage.setItem("fax","(072) 242-2698");
		localStorage.setItem("email","cicosatc@yahoo.com");
		localStorage.setItem("address","Lingsat, City of San Fernando  , La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1014'){
		localStorage.setItem("current_hei","Colegio de Dagupan");
		localStorage.setItem("institution_head","Dr. Voltaire P. Arzadon");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 522-2405");
		localStorage.setItem("fax","(075) 522-3629");
		localStorage.setItem("email","info@cdd.edu.ph, registrar@cdd.edu.ph");
		localStorage.setItem("address","Arellano Street, Dagupan City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1113'){
		localStorage.setItem("current_hei","Colegio San Jose De Alaminos");
		localStorage.setItem("institution_head","Rev. Fr. Melchor Joseph C. Braga");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 551-4881; (075) 551-2979");
		localStorage.setItem("fax","(075) 551-2979");
		localStorage.setItem("email","csja01@yahoo.com, bubbly_craze@yahoo.com");
		localStorage.setItem("address","Quezon Avenue, Alaminos City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1114'){
		localStorage.setItem("current_hei","Colegio San Juan de Letran - Manaoag");
		localStorage.setItem("institution_head","Fr. Napoleon B. Sipalay, OP");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 519-5033");
		localStorage.setItem("fax","(075) 529-0506");
		localStorage.setItem("email","letrancollegedean@gmail.com ");
		localStorage.setItem("address","Poblacion, Manaoag, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1016'){
		localStorage.setItem("current_hei","Dagupan Colleges Foundation");
		localStorage.setItem("institution_head","Domini P. Valdez");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 516-2554");
		localStorage.setItem("fax","(075) 516-2554");
		localStorage.setItem("email","dagupan_colleges@yahoo.com.ph ");
		localStorage.setItem("address","AB Fernandez East, Dagupan City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1017'){
		localStorage.setItem("current_hei","Data Center College of the Philippines of Laoag City, Inc.");
		localStorage.setItem("institution_head","Mr. Joseph D. Sicco");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 770-3975, (077)770-3652");
		localStorage.setItem("fax","(077) 770-3652");
		localStorage.setItem("email","dccplaoag@yahoo.com");
		localStorage.setItem("address","A.G. Tupaz Cor. M.V. Fariñas Sts., Brgy. San Vicente, Laoag City (Capital), Ilocos Norte");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1111'){
		localStorage.setItem("current_hei","Data Center College of the Philippines of Vigan City, Ilocos Sur, Inc.");
		localStorage.setItem("institution_head","LAURO A. RAPISURA");
		localStorage.setItem("institution_head_title","Administrator");
		localStorage.setItem("telno","(077) 674-2535");
		localStorage.setItem("fax","(077) 674-2535");
		localStorage.setItem("email","dccpvigan@yahoo.com, lquilenderino@yahoo.com");
		localStorage.setItem("address","Tamag, City of Vigan, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1018'){
		localStorage.setItem("current_hei","Divine Word College of Laoag");
		localStorage.setItem("institution_head","Rev. Fr. Reynaldo B. Jimenez, SVD");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 772-0736");
		localStorage.setItem("fax","(077) 772-1625");
		localStorage.setItem("email","dwclregistrar2k12@yahoo.com, rlbitancor@yahoo.com");
		localStorage.setItem("address","General Segundo Avenue, Barangay 12, Laoag City (Capital), Ilocos Norte");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1019'){
		localStorage.setItem("current_hei","Divine Word College of Urdaneta");
		localStorage.setItem("institution_head","Rev. Fr. Gil T. Manalo, SVD");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 568-2588; (075) 568-2796; (075) 568-5966");
		localStorage.setItem("fax","(075) 568-2588");
		localStorage.setItem("email","dwcurd@yahoo.com");
		localStorage.setItem("address","J.P. Rizal Street, Bayaoas, Urdaneta City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1020'){
		localStorage.setItem("current_hei","Divine Word College of Vigan");
		localStorage.setItem("institution_head","Rev. Fr. Cirilo O. Ortega, SVD");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 722-2033; (077) 722 -2034");
		localStorage.setItem("fax","(077) 722-1821");
		localStorage.setItem("email","officialdwcvregistrar@yahoo.com, dwcvdaa@gmail.com");
		localStorage.setItem("address","Burgos Street, City of Vigan, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1109'){
		localStorage.setItem("current_hei","Golden West Colleges");
		localStorage.setItem("institution_head","Ms. Domini P. Valdez");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 552-7382");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","gwc_registrar@yahoo.com, gwc_09@yahoo.com");
		localStorage.setItem("address","San Jose Drive, Alaminos City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1032'){
		localStorage.setItem("current_hei","Ilocos Sur Community College");
		localStorage.setItem("institution_head","Dr. Carmencita Reyes Paz");
		localStorage.setItem("institution_head_title","College Administrator");
		localStorage.setItem("telno","(077) 722-5870");
		localStorage.setItem("fax","(077) 722-5870");
		localStorage.setItem("email","iscc_vigan@yahoo.com, menchiedreyes@yahoo.com");
		localStorage.setItem("address","Quirino Stadium, Bantay, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1141'){
		localStorage.setItem("current_hei","Immaculate Conception School of Technology");
		localStorage.setItem("institution_head","Rev. Fr. Lain M. Mayo");
		localStorage.setItem("institution_head_title","Rector/Dean of Studies");
		localStorage.setItem("telno","(077) 722-2359; (077) 632-0478");
		localStorage.setItem("fax","(077) 722-1119");
		localStorage.setItem("email","icstvigan1953@yahoo.com");
		localStorage.setItem("address","Pantay Daya, Vigan City, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1132'){
		localStorage.setItem("current_hei","International College of Excellence, Inc.");
		localStorage.setItem("institution_head","Engr. Danilo B. Lim");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 568-7660");
		localStorage.setItem("fax","(075) 568-7660");
		localStorage.setItem("email","ice2003.urdaneta@gmail.com");
		localStorage.setItem("address","40 Calle Garcia, Poblacion, Urdaneta City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1128'){
		localStorage.setItem("current_hei","Kingfisher School of Business and Finance");
		localStorage.setItem("institution_head","Mr. Augustues P. Lambino");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 515-4697");
		localStorage.setItem("fax","(075) 515-4698");
		localStorage.setItem("email","kingfisherschool@yahoo.com.ph");
		localStorage.setItem("address","1131 Mac Arthur Highway, Lucao District, Dagupan City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1124'){
		localStorage.setItem("current_hei","La Finn's Scholastica");
		localStorage.setItem("institution_head","Dr. Zenaida C. Finn");
		localStorage.setItem("institution_head_title","Chairperson/President, Board of Trustees");
		localStorage.setItem("telno","(072) 888-0858; (072) 888-5016");
		localStorage.setItem("fax","(072) 888-5199");
		localStorage.setItem("email","lucnas2003@yahoo.com");
		localStorage.setItem("address","181 Purok 3 Biday, City of San Fernando  , La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1140'){
		localStorage.setItem("current_hei","La Union Christian Comprehensive College");
		localStorage.setItem("institution_head","Ms. Micheline B. Rabara");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 712-0131");
		localStorage.setItem("fax","(072) 712-0140");
		localStorage.setItem("email","luccc2007@yahoo.com");
		localStorage.setItem("address","Benteng, Rosario, La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1116'){
		localStorage.setItem("current_hei","La Union College of Science and Technology");
		localStorage.setItem("institution_head","Engr. Arturo C. Quinto");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 705-3629");
		localStorage.setItem("fax","(072) 705-0335");
		localStorage.setItem("email","alucst@yahoo.com.ph");
		localStorage.setItem("address","Pezcadorez Street, Bauang, La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1034'){
		localStorage.setItem("current_hei","Lorma Colleges");
		localStorage.setItem("institution_head","Dr. Jose P. Mainggang");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(072) 700-2500; (072) 888-4341");
		localStorage.setItem("fax","(072) 888-4341");
		localStorage.setItem("email","joema@lorma.edu.ph, joema@lorma.edu");
		localStorage.setItem("address","Carlatan, City of San Fernando  , La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1035'){
		localStorage.setItem("current_hei","Luna Colleges");
		localStorage.setItem("institution_head","Ms. Maria Lourdes Mamenta-Ramos");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 572-3176");
		localStorage.setItem("fax","(075) 572-3176");
		localStorage.setItem("email","luna_colleges1934@yahoo.com, mlmamenta.lci@gmail.com");
		localStorage.setItem("address","Lopez-Jaena Street, Tayug, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1117'){
		localStorage.setItem("current_hei","Luzon College of Science and Technology (Urdaneta), Inc.");
		localStorage.setItem("institution_head","Mr. Bernardo P. Del Campo");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 568-3474");
		localStorage.setItem("fax","(075) 568-3474");
		localStorage.setItem("email","lcst_urda@yahoo.com");
		localStorage.setItem("address","Mc Arthur Highway, Nancayasan, Urdaneta City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1037'){
		localStorage.setItem("current_hei","Lyceum Northern Luzon");
		localStorage.setItem("institution_head","Dr. Mariano M. Gandia");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 568-7963");
		localStorage.setItem("fax","(075) 568-7966");
		localStorage.setItem("email","lyceumnorthernluzon_inc@yahoo.com.ph ");
		localStorage.setItem("address","Mc Arthur Hi-way, San Vicente Central, Urdaneta City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1103'){
		localStorage.setItem("current_hei","Lyceum Northwestern University");
		localStorage.setItem("institution_head","Dr. Francisco T. Duque III, MSC, DSC (HC)");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 515-8682; (075) 516-2434"); 
		localStorage.setItem("fax","(075) 516-2433");
		localStorage.setItem("email","lnu@registrar.edu.ph");
		localStorage.setItem("address","Tapuac District, Dagupan City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1110'){
		localStorage.setItem("current_hei","Lyceum Northwestern University - Urdaneta City Campus");
		localStorage.setItem("institution_head","Dr. Francisco T. Duque III, MSC, DSC (HC)");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 568-7342; (075) 560-2372");
		localStorage.setItem("fax","(075) 568-7342");
		localStorage.setItem("email","mgzuluetasoni@yahoo.com ");
		localStorage.setItem("address","Nancayasan, Urdaneta City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1104'){
		localStorage.setItem("current_hei","Macro Colleges, Inc.");
		localStorage.setItem("institution_head","Dr. Cirilo A. Parra");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 722-2097");
		localStorage.setItem("fax","(077) 722-2097");
		localStorage.setItem("email","macrocollegesinc@yahoo.com, macrocolleges_nscc@yahoo.com");
		localStorage.setItem("address","Rizal Street, City of Vigan, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1003'){
		localStorage.setItem("current_hei","Malasiqui Agno Valley College");
		localStorage.setItem("institution_head","Mr. Jevie P. de Guzman");
		localStorage.setItem("institution_head_title","School President");
		localStorage.setItem("telno","(075) 536-5372");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","mavc1936@yahoo.com");
		localStorage.setItem("address","Bonifacio Street, Malasiqui, Pangasinan");
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
		
		
		
		
		
		
		
	}
	if(instcode=='1041'){
		localStorage.setItem("current_hei","Mary Help of Christians College Seminary");
		localStorage.setItem("institution_head","Rev. Fr. Mario Dominic C. Sanchez");
		localStorage.setItem("institution_head_title","Rector");
		localStorage.setItem("telno","(075) 515-5720");
		localStorage.setItem("fax","(075) 515-5720");
		localStorage.setItem("email","aldmhcts@gmail.com ");
		localStorage.setItem("address","Bonuan Gueset, Dagupan City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1146'){
		localStorage.setItem("current_hei","Mary Help Christians Theology Seminary");
		localStorage.setItem("institution_head","MSGR. OLIVER E. MENDOZA");
		localStorage.setItem("institution_head_title","Rector");
		localStorage.setItem("telno","075-6960236 ");
		localStorage.setItem("fax","075 696 0236");
		localStorage.setItem("email","aldmhcts@gmail.com");
		localStorage.setItem("address","Palapad, San Fabian, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1098'){
		localStorage.setItem("current_hei","Metro-Dagupan Colleges");
		localStorage.setItem("institution_head","Ms. Mae T. De los Reyes, MA");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 522-6367");
		localStorage.setItem("fax","(075) 522-6367");
		localStorage.setItem("email","romae_mdc@yahoo.com");
		localStorage.setItem("address","Serafica Street, Mangaldan, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1119'){
		localStorage.setItem("current_hei","Mystical Rose College of Science and Technology");
		localStorage.setItem("institution_head","Dr. Antonia B. Valmonte");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 546-4579");
		localStorage.setItem("fax","(075) 546-3297");
		localStorage.setItem("email","mrcst@ymail.com");
		localStorage.setItem("address","Pogonlomboy, Mangatarem, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1129'){
		localStorage.setItem("current_hei","NICOSAT Colleges");
		localStorage.setItem("institution_head","Dr. Jocelyn Abella-Galang");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 742-8413");
		localStorage.setItem("fax","(077) 742-8414");
		localStorage.setItem("email","nicosat@yahoo.com, northernilocandia@yahoo.com.ph");
		localStorage.setItem("address","Oaig Daya, City of Candon, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1083'){
		localStorage.setItem("current_hei","NJ Valdez Colleges Foundation");
		localStorage.setItem("institution_head","Ms. Domini P. Valdez");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 564-5054");
		localStorage.setItem("fax","(075) 564-3061");
		localStorage.setItem("email","nj_valdezcollege@yahoo.com");
		localStorage.setItem("address","Bacag, Villasis, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1048'){
		localStorage.setItem("current_hei","Northern Christian College");
		localStorage.setItem("institution_head","Dr. Caesar I. Agnir");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 772-0052; (077) 772-1864");
		localStorage.setItem("fax","(077) 772-1864");
		localStorage.setItem("email","cia.77m633@gmail.com");
		localStorage.setItem("address","Mabini Street, Laoag City (Capital), Ilocos Norte");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1050'){
		localStorage.setItem("current_hei","Northern Luzon Adventist College");
		localStorage.setItem("institution_head","Pastor Nepthali J. Mañez");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 567-2627");
		localStorage.setItem("fax","(075) 567-2627");
		localStorage.setItem("email","esterpoli20@yahoo.com");
		localStorage.setItem("address","Artacho, Sison, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1051'){
		localStorage.setItem("current_hei","Northern Philippines College for Maritime, Science and Technology");
		localStorage.setItem("institution_head","Mr. Feban M. Quinto");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 242-5676 (077) 607-3167");
		localStorage.setItem("fax","(072) 242-5676");
		localStorage.setItem("email","npcmst_sfc@yahoo.com, reg_npcmst@yahoo.com");
		localStorage.setItem("address","National Highway, Lingsat, City of San Fernando  , La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1052'){
		localStorage.setItem("current_hei","Northwestern University");
		localStorage.setItem("institution_head","Atty. Ferdinand S. Nicolas");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 670-8609, 670-8610");
		localStorage.setItem("fax","(077) 771-3814");
		localStorage.setItem("email","eddivinaallodo@gmail.com, registrar_nwulaoag@yahoo.com");
		localStorage.setItem("address","Don Mariano Marcos Avenue, Laoag City (Capital), Ilocos Norte");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1053'){
		localStorage.setItem("current_hei","Osias Educational Foundation");
		localStorage.setItem("institution_head","Dr. Danilo A. Concepcion");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 607-0142");
		localStorage.setItem("fax","(072) 607-0142");
		localStorage.setItem("email","oefbalaoan47@yahoo.com");
		localStorage.setItem("address","Brgy. Dr. Camilo Osias, Balaoan, La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1054'){
		localStorage.setItem("current_hei","Palaris College");
		localStorage.setItem("institution_head","Atty. Fe Lioaoa S. Baun");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 532-3847");
		localStorage.setItem("fax","(075) 532-3847");
		localStorage.setItem("email","palariscolleges@yahoo.com.ph, palariscollleges1946@gmail.com");
		localStorage.setItem("address","01 Perez Boulevard , San Carlos City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1057'){
		localStorage.setItem("current_hei","Pangasinan Merchant Marine Academy");
		localStorage.setItem("institution_head","Ms. Michelle B. dela Cruz-Rosales");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 515-3331");
		localStorage.setItem("fax","(075) 515-7870; (075) 515-3331");
		localStorage.setItem("email","pammaregistrar@yahoo.com");
		localStorage.setItem("address","Perez Boulevard, Dagupan City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1127'){
		localStorage.setItem("current_hei","Panpacific University North Philippines - Tayug");
		localStorage.setItem("institution_head","Dr. Donna Padilla - Taguiba");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 572-2934");
		localStorage.setItem("fax","(075) 572-2935");
		localStorage.setItem("email","info@punptayug.edu.ph");
		localStorage.setItem("address","Lopez Jaena Street, Tayug, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1055'){
		localStorage.setItem("current_hei","Panpacific University North Philippines - Urdaneta City");
		localStorage.setItem("institution_head","Dr. Rhonda T. Padilla");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 568-2672");
		localStorage.setItem("fax","(075) 568-7662");
		localStorage.setItem("email","punp.secretariat@gmail.com, punp.registrar@gmail.com");
		localStorage.setItem("address","McArthur Highway, San Vicente, Urdaneta City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1100'){
		localStorage.setItem("current_hei","PASS College");
		localStorage.setItem("institution_head","Mr. Christian Reubens M. Morante / Diosdado B. Santiago Jr.");
		localStorage.setItem("institution_head_title","College President / OIC- College Director");
		localStorage.setItem("telno","(075) 551-3364; (075) 654-0001; (075) 654-1020");
		localStorage.setItem("fax","(075) 654-0001");
		localStorage.setItem("email","pass.college.director@gmail.com , registrarpasscollege@gmail.com");
		localStorage.setItem("address","Quezon Avenue, Alaminos City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1059'){
		localStorage.setItem("current_hei","Perpetual Help College of Pangasinan");
		localStorage.setItem("institution_head","Dr. Rowel A. Crisostomo, CSEE");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(075) 536-4955");
		localStorage.setItem("fax","(075) 536-4955");
		localStorage.setItem("email","perpetualpangasinan@yahoo.com");
		localStorage.setItem("address","Montemayor Street, Malasiqui, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1133'){
		localStorage.setItem("current_hei","Philippine College of Northwestern Luzon");
		localStorage.setItem("institution_head","Dr. Vicente D. Ching");
		localStorage.setItem("institution_head_title","VP - Academic Affairs");
		localStorage.setItem("telno","(072) 710-1893");
		localStorage.setItem("fax","(072) 710-0290");
		localStorage.setItem("email","vicentedulayching@yahoo.co.uk");
		localStorage.setItem("address","Doña Toribia Aspiras Road, San Antonio, Agoo, La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1061'){
		localStorage.setItem("current_hei","Philippine College of Science and Technology");
		localStorage.setItem("institution_head","Dr. Lourdes S. Fernandez");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 522-8032");
		localStorage.setItem("fax","(075) 523-0894");
		localStorage.setItem("email","philcstreg@yahoo.com");
		localStorage.setItem("address","Nalsian, Calasiao, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1134'){
		localStorage.setItem("current_hei","Philippine Darakbang Theological College");
		localStorage.setItem("institution_head","Dr. Rosalia D. Guadaña");
		localStorage.setItem("institution_head_title","College President & Dean");
		localStorage.setItem("telno","(075) 562-5289");
		localStorage.setItem("fax","(075) 562-5290");
		localStorage.setItem("email","darakbang.college@yahoo.com");
		localStorage.setItem("address","Sto. Nino, Binalonan, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1150'){
		localStorage.setItem("current_hei","PHINMA Upang Urdaneta");
		localStorage.setItem("institution_head","Ms. Lovella C. Sanares");
		localStorage.setItem("institution_head_title","Asst. Chief Operations Officer");
		localStorage.setItem("telno","N/A");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","upang_urdaneta@up.phinma.edu.ph");
		localStorage.setItem("address","Mc Arthur Hi-way, Nancayasan, Urdaneta City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1062'){
		localStorage.setItem("current_hei","PIMSAT Colleges - Dagupan");
		localStorage.setItem("institution_head","Atty. Rebene C. Carrera");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 523-6667");
		localStorage.setItem("fax","(075) 522-1808");
		localStorage.setItem("email","pimsat_colleges@yahoo.com");
		localStorage.setItem("address","Mc Arthur Hi-way, Bolosan, Dagupan City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1144'){
		localStorage.setItem("current_hei","PIMSAT Colleges - San Carlos City");
		localStorage.setItem("institution_head","Atty. Rebene C. Carrera");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 634-1789");
		localStorage.setItem("fax","(075) 634-1789");
		localStorage.setItem("email","pimsatcolleges2015@gmail.com");
		localStorage.setItem("address","Rizal Street, San Carlos City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1060'){
		localStorage.setItem("current_hei","Polytechnic College of La Union");
		localStorage.setItem("institution_head","Dr. Rodolfo T. Panay");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 710-0242; 607-9512");
		localStorage.setItem("fax","(072) 521-0592");
		localStorage.setItem("email","pcluph@yahoo.com");
		localStorage.setItem("address","San Joaquin Sur, Agoo, La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1142'){
		localStorage.setItem("current_hei","Polytechnic Colleges of Region 1");
		localStorage.setItem("institution_head","Dr. Zenaida C. Finn");
		localStorage.setItem("institution_head_title","President and Chairman, Board of Trustees");
		localStorage.setItem("telno","(077) 732-5724");
		localStorage.setItem("fax","(072) 888-5199");
		localStorage.setItem("email","pcr1.narvacan@gmail.com");
		localStorage.setItem("address","San Jose, Narvacan, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1137'){
		localStorage.setItem("current_hei","Rosales-Wesleyan Bible College");
		localStorage.setItem("institution_head","Rev. Robin S. Wag-e");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 582-3540");
		localStorage.setItem("fax","(075) 582-2710");
		localStorage.setItem("email","rwbc2007@yahoo.com, adnilre7@yahoo.com");
		localStorage.setItem("address","Zamora St. San Pedro West, Rosales, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1173'){
		localStorage.setItem("current_hei","Saint Columban's College");
		localStorage.setItem("institution_head","Rev. Fr. Dexter Z. Cariño");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(075) 542-4864");
		localStorage.setItem("fax","(075) 542-4864");
		localStorage.setItem("email","st_columbanscg@yahoo.com");
		localStorage.setItem("address","Poblacion, Lingayen, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1135'){
		localStorage.setItem("current_hei","Saint John Bosco College of Northern Luzon");
		localStorage.setItem("institution_head","Ms. Brenda P. Gandeza");
		localStorage.setItem("institution_head_title","Administrator");
		localStorage.setItem("telno","(072) 700-0164; (072) 607-5373; (072) 700-1376");
		localStorage.setItem("fax","(072) 700-0164");
		localStorage.setItem("email","saintjohnbosco_registrar@yahoo.com");
		localStorage.setItem("address","Lingsat, City of San Fernando  , La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1074'){
		localStorage.setItem("current_hei","Sain Louis College of San Fernando, La Union, Inc.");
		localStorage.setItem("institution_head","Rev. Fr. Gilbert B. Sales, CICM");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 242-5535; (072) 242-5536");
		localStorage.setItem("fax","(072) 888-3955");
		localStorage.setItem("email","slc_president@yahoo.com, slc_admin@slc-sflu.edu.ph");
		localStorage.setItem("address","National Highway, Lingsat, City of San Fernando  , La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1121'){
		localStorage.setItem("current_hei","Saint Therese College Foundation");
		localStorage.setItem("institution_head","Dr. Armand F. Magleo, SLD");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 955-5370; (075) 955-5539");
		localStorage.setItem("fax","(075) 955-5000");
		localStorage.setItem("email","teresyanoako@yahoo.com ");
		localStorage.setItem("address","M. Soriano, San Carlos City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1077'){
		localStorage.setItem("current_hei","San Carlos College");
		localStorage.setItem("institution_head","Dr. Elsa Ma. V. Unson");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 955-5190; 634-1094; 09198048673");
		localStorage.setItem("fax","(075) 955-5190");
		localStorage.setItem("email","registrar_sancarloscollege@yahoo.com");
		localStorage.setItem("address","Mabini Street, San Carlos City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1078'){
		localStorage.setItem("current_hei","Sea and Sky College");
		localStorage.setItem("institution_head","Mr. Daniel T. Bolong, Jr.");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 607-4224; (072) 700-2702");
		localStorage.setItem("fax","(072) 607-4224; (072) 607-5582");
		localStorage.setItem("email","seaskycollege@yahoo.com");
		localStorage.setItem("address","Greenhills Subdivision, Pagdaraoan, City of San Fernando  , La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1149'){
		localStorage.setItem("current_hei","Señor Teroso College");
		localStorage.setItem("institution_head","EDITHA T. CARDOZO");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","075 522 49 28; 075 522 8575; 075 522 4928");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","senortesoro_college@yahoo.com.ph");
		localStorage.setItem("address","San Miguel, Diversion Road, Calasiao, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1115'){
		localStorage.setItem("current_hei","South Ilocandia College of Arts and Technology");
		localStorage.setItem("institution_head","Mr. John Y. Chan");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 714-0213; (072) 607-9408");
		localStorage.setItem("fax","(072) 521-0101");
		localStorage.setItem("email","sicatcollege2000@yahoo.com");
		localStorage.setItem("address","San Eugenio, Aringay, La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1131'){
		localStorage.setItem("current_hei","St. Camillus College of Manaoag Foundation, Inc.");
		localStorage.setItem("institution_head","Prof. Isabel R. Mendoza");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 529-1246; (075) 519-5200");
		localStorage.setItem("fax","(075) 529-1246");
		localStorage.setItem("email","st.camilluscollegefoundation@gmail.com");
		localStorage.setItem("address","Barangay Licsi, Manaoag, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1075'){
		localStorage.setItem("current_hei","St. Mary's College Sta. Maria, Ilocos Sur, Inc.");
		localStorage.setItem("institution_head","MS. LEONIDA D. SISON, MAEd ");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 732-5629");
		localStorage.setItem("fax","(077) 732-5558");
		localStorage.setItem("email","smcian_2005@yahoo.com.ph");
		localStorage.setItem("address","Poblacion Sur, Sta. Maria, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1076'){
		localStorage.setItem("current_hei","St. Paul College of Ilocos Sur");
		localStorage.setItem("institution_head","Sr. Carolina Agravante, SPC");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 674-2457");
		localStorage.setItem("fax","(077) 674-2457");
		localStorage.setItem("email","Spcilocossur@yahoo.com");
		localStorage.setItem("address","Bayubay, San Vicente, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1105'){
		localStorage.setItem("current_hei","Sta. Veronica College");
		localStorage.setItem("institution_head","Ms. Ging-Ging R. Rodriguez");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(072) 607-0906; 720-2604, 607-0963");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","cljrodriguez@amaes.edu.ph");
		localStorage.setItem("address","National Highway, Baroro, Bacnotan, La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1107'){
		localStorage.setItem("current_hei","STI Dagupan, Inc.");
		localStorage.setItem("institution_head","Mr. Russel Anthony C. Beligan");
		localStorage.setItem("institution_head_title","Deputy School Administrator");
		localStorage.setItem("telno","(075) 653-3668");
		localStorage.setItem("fax","(075) 522-2557");
		localStorage.setItem("email","sti.dagupan@gmail.com, mars_sti_dag@yahoo.com");
		localStorage.setItem("address","Arellano St., Dagupan City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1148'){
		localStorage.setItem("current_hei","STI Education Services Group Inc.");
		localStorage.setItem("institution_head","Evangeline V. Salaguban");
		localStorage.setItem("institution_head_title","Administrator");
		localStorage.setItem("telno","(077) 770 5179 / (077) 771 4613");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","evangeline.salaguban@laoag.sti.edu.ph");
		localStorage.setItem("address","J.P. Rizal St. corner Don E. Ruiz St., Laoag City, Ilocos Norte");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1147'){
		localStorage.setItem("current_hei","STI Vigan Incorporated");
		localStorage.setItem("institution_head","MELVIN JEFFREY M. DELA CRUZ / LEILA ISAGUIRRE-MALAMUG");
		localStorage.setItem("institution_head_title","President / Administrator");
		localStorage.setItem("telno","(077) 722-8698");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","admin@vigan.sti.edu");
		localStorage.setItem("address","Burgos Pantay Daya, Vigan City, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1106'){
		localStorage.setItem("current_hei","Systems Technology Institute (STI) College - San Fernando City, Inc.");
		localStorage.setItem("institution_head","Engr. Antonio R. Alvarado, Jr.");
		localStorage.setItem("institution_head_title","Administrator");
		localStorage.setItem("telno","(072) 242-5733; (072) 700-3145");
		localStorage.setItem("fax","(072) 242-5733");
		localStorage.setItem("email","stisanfernandolaunion@yahoo.com");
		localStorage.setItem("address","STI Building, Aguila Road, Sevilla Norte, City of San Fernando  , La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1002'){
		localStorage.setItem("current_hei","The Adelphi College");
		localStorage.setItem("institution_head","Atty. Jose L. Lopez Jr.");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 542-4543");
		localStorage.setItem("fax","(075) 542-4544");
		localStorage.setItem("email","adelphi_college1945@yahoo.com");
		localStorage.setItem("address","New Street East, Lingayen, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1029'){
		localStorage.setItem("current_hei","The Great Pleberian College");
		localStorage.setItem("institution_head","Ms. Lourdes B. Garcia");
		localStorage.setItem("institution_head_title","School President");
		localStorage.setItem("telno","(075) 552 7250");
		localStorage.setItem("fax","(075) 634-0195");
		localStorage.setItem("email","gpcalaminoscity@yahoo.com.ph");
		localStorage.setItem("address","Don P. Reinoso, Alaminos City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1079'){
		localStorage.setItem("current_hei","Union Christian College");
		localStorage.setItem("institution_head","Dr. Myrna L. Carreon");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 888-3340; (072) 700-0282");
		localStorage.setItem("fax","(072) 888-3340");
		localStorage.setItem("email","unionchristiancollege@gmail.com");
		localStorage.setItem("address","Barangay 2, Widdoes Street, City of San Fernando  , La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1136'){
		localStorage.setItem("current_hei","University of Eastern Pangasinan");
		localStorage.setItem("institution_head","Dr. Ramon V. Guico III");
		localStorage.setItem("institution_head_title","University President");
		localStorage.setItem("telno","(075) 562-5338");
		localStorage.setItem("fax","(075) 562-5338");
		localStorage.setItem("email","registrar_uep@yahoo.com.ph");
		localStorage.setItem("address","Poblacion, Binalonan, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1036'){
		localStorage.setItem("current_hei","University of Luzon");
		localStorage.setItem("institution_head","Dr. Mac Arthur M. Samson");
		localStorage.setItem("institution_head_title","University President");
		localStorage.setItem("telno","(075) 515-7707; (075) 515-8177");
		localStorage.setItem("fax","(075) 515-5767");
		localStorage.setItem("email","ul.registrar@yahoo.com");
		localStorage.setItem("address","Perez Boulvard, Dagupan City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1081'){
		localStorage.setItem("current_hei","University of Pangasinan");
		localStorage.setItem("institution_head","Dr. Meliton B. Salazar");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 522-5635 to 37");
		localStorage.setItem("fax","(075) 522-2496 ");
		localStorage.setItem("email","lmsoriano@up.phinma.edu.ph");
		localStorage.setItem("address","Arellano Street, Dagupan City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1084'){
		localStorage.setItem("current_hei","Urdaneta City University");
		localStorage.setItem("institution_head","Dr. Elizabeth A. Montero");
		localStorage.setItem("institution_head_title","University President");
		localStorage.setItem("telno","(075) 568-7612");
		localStorage.setItem("fax","(075) 568-7612");
		localStorage.setItem("email","ucu.main@gmail.com");
		localStorage.setItem("address","San Vicente West, Urdaneta City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1086'){
		localStorage.setItem("current_hei","Virgen Milagrosa University Foundation");
		localStorage.setItem("institution_head","Dr. Ma. Lilia P. Juan, M.D., FPCHA");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 531-2222; (075) 634-111; (075) 955-2222");
		localStorage.setItem("fax","(075) 634-2692; (075) 955-5707");
		localStorage.setItem("email","vmuf1958@gmail.com");
		localStorage.setItem("address","Martin P. Posadas Avenue, San Carlos City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1143'){
		localStorage.setItem("current_hei","WCC aeronautical & Technological College, Inc.");
		localStorage.setItem("institution_head","Dr. Ramon V. Guico III");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 562-6007");
		localStorage.setItem("fax","(075) 562-6007");
		localStorage.setItem("email","w.estano@wccaviation.com");
		localStorage.setItem("address","Brgy. Sta. Maria Norte, Binalonan, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1023'){
		localStorage.setItem("current_hei","Don Mariano Marcos Memorial State University - Mid La Union");
		localStorage.setItem("institution_head","Dr. Paulito C. Nisperos");
		localStorage.setItem("institution_head_title","Chancellor");
		localStorage.setItem("telno","(072) 242-3608; (072) 888-3191");
		localStorage.setItem("fax","(072) 242-3608");
		localStorage.setItem("email","dmmmsucamis@yahoo.com");
		localStorage.setItem("address","Catbangen, City of San Fernando  , La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1026'){
		localStorage.setItem("current_hei","Don Mariano Marcos Memorial State University - North La Union - Main Campus");
		localStorage.setItem("institution_head","Atty. Benjamin P. Sapitula / Dr. Jaime I. Manuel Jr.");
		localStorage.setItem("institution_head_title","President / Chancellor");
		localStorage.setItem("telno","(072) 242-1117");
		localStorage.setItem("fax","(072) 242-1117");
		localStorage.setItem("email","nluc_chancellor@dmmmsu.edu.ph");
		localStorage.setItem("address","Sapilang, Bacnotan, La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1023a'){
		localStorage.setItem("current_hei","Don Mariano Marcos Memorial State University - Open University");
		localStorage.setItem("institution_head","Dr. Ophelia Romana Luisa A. Cardenas");
		localStorage.setItem("institution_head_title","Director");
		localStorage.setItem("telno","(072) 242-3608; (072)8 88-2266");
		localStorage.setItem("fax","(072) 242-3608");
		localStorage.setItem("email","dmmmsuca_op@yahoo.com.ph");
		localStorage.setItem("address","Catbangen, City of San Fernando  , La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1021'){
		localStorage.setItem("current_hei","Don Mariano Marcos Memorial State University - South La Union");
		localStorage.setItem("institution_head","Dr. Floribeth P. Cuison");
		localStorage.setItem("institution_head_title","Chancellor");
		localStorage.setItem("telno","(072) 521-0020");
		localStorage.setItem("fax","(072) 521-0020; 521-0009; 710-7959");
		localStorage.setItem("email","dmmmsu.sluc@yahoo.com.ph");
		localStorage.setItem("address","Dona Toribia Aspiras Road, Agoo, La Union");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1031'){
		localStorage.setItem("current_hei","Ilocos Sur Polytechnic State College - Main");
		localStorage.setItem("institution_head","Dr. Francisco D. Lopez");
		localStorage.setItem("institution_head_title","SUC President II");
		localStorage.setItem("telno","(077) 745-5512");
		localStorage.setItem("fax","(077) 732-5512 ");
		localStorage.setItem("email","ispsc_2705@yahoo.com");
		localStorage.setItem("address","National Highway, Sta. Maria, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1094'){
		localStorage.setItem("current_hei","Ilocos Sur Polytechnic State College - Candon");
		localStorage.setItem("institution_head","Dr. Pasty Panizares");
		localStorage.setItem("institution_head_title","Campus Director");
		localStorage.setItem("telno","(077) 742-5228");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","N/A");
		localStorage.setItem("address","Barangay Darapidap, City of Candon, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1091'){
		localStorage.setItem("current_hei","Ilocos Sur Polytechnic State College - Cervantes");
		localStorage.setItem("institution_head","Dr. Renato Sawey");
		localStorage.setItem("institution_head_title","Campus Director");
		localStorage.setItem("telno","(077)  732 55 12");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","ispsc2710@yahoo.com");
		localStorage.setItem("address","Cervantes, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1089'){
		localStorage.setItem("current_hei","Ilocos Sur Polytechnic State College - College of Arts and Sciences - Tagudin");
		localStorage.setItem("institution_head","Dr. Remedios Obille");
		localStorage.setItem("institution_head_title","Campus Director");
		localStorage.setItem("telno","(077) 748-7177");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","ispsctagudin@yahoo.com ");
		localStorage.setItem("address","Tagudin, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1088'){
		localStorage.setItem("current_hei","Ilocos Sur Polytechnic State College - College of Engineering and Technology - Santiago");
		localStorage.setItem("institution_head","Dr. Aurora Ayson");
		localStorage.setItem("institution_head_title","Campus Director");
		localStorage.setItem("telno","(077)  732 55 12");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","N/A");
		localStorage.setItem("address","Poblacion Norte, Santiago, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1090'){
		localStorage.setItem("current_hei","Ilocos Sur Polytechnic State - College of Fisheries and Marine Science - Narvacan");
		localStorage.setItem("institution_head","Dr. Denis Cabotage");
		localStorage.setItem("institution_head_title","Campus Director");
		localStorage.setItem("telno","(077)  732 55 12");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","ispscnarvacan@gmail.com");
		localStorage.setItem("address","Sulvec, Narvacan, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1044'){
		localStorage.setItem("current_hei","Mariano Marcos State University - College of Agriculture and Forestry - Dingras");
		localStorage.setItem("institution_head","Dr. Jocelyn A. Bernabe");
		localStorage.setItem("institution_head_title","Coordinator");
		localStorage.setItem("telno","(077) 784-7083");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","mmsuop@yahoo.com , vpaammsu@yahoo.com.ph");
		localStorage.setItem("address","Barangay Madamba, Dingras, Ilocos Norte");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1043'){
		localStorage.setItem("current_hei","Mariano Marcos State University - College of Aquatic Science & Applied Technology - Currimao");
		localStorage.setItem("institution_head","Dr. Andres Y. Tungpalan");
		localStorage.setItem("institution_head_title","Dean");
		localStorage.setItem("telno","(077) 793-6916");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","mmsuop@yahoo.com , vpaammsu@yahoo.com.ph");
		localStorage.setItem("address","Pias Sur, Currimao, Ilocos Norte");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1046'){
		localStorage.setItem("current_hei","Mariano Marcos State University - College of Industrial Technology - Laoag City");
		localStorage.setItem("institution_head","Dr. Cesario Y. Pacis");
		localStorage.setItem("institution_head_title","Dean");
		localStorage.setItem("telno","(077) 771-4241");
		localStorage.setItem("fax","(077) 771-4241");
		localStorage.setItem("email","mmsuop@yahoo.com , vpaammsu@yahoo.com.ph");
		localStorage.setItem("address","P. Gomez Street, Laoag City (Capital), Ilocos Norte");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1045'){
		localStorage.setItem("current_hei","Mariano Marcos State University - College of Teacher Education - Laoag City");
		localStorage.setItem("institution_head","Dr. Eliza T. Samson");
		localStorage.setItem("institution_head_title","Dean");
		localStorage.setItem("telno","(077) 221-4143");
		localStorage.setItem("fax","(077) 771-4143");
		localStorage.setItem("email","mmsuop@yahoo.com , vpaammsu@yahoo.com.ph");
		localStorage.setItem("address","Castro Avenue, Laoag City (Capital), Ilocos Norte");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1040'){
		localStorage.setItem("current_hei","Mariano Marcos State University - Main");
		localStorage.setItem("institution_head","Dr. Prima Fe R. Franco");
		localStorage.setItem("institution_head_title","OIC President");
		localStorage.setItem("telno","(077) 792-3191; (077) 792-3925 ");
		localStorage.setItem("fax","(077) 792-3191");
		localStorage.setItem("email","mmsuop@yahoo.com , vpaammsu@yahoo.com.ph");
		localStorage.setItem("address","Barangay 16, City of Batac, Ilocos Norte");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1082'){
		localStorage.setItem("current_hei","North Luzon Philippine State College");
		localStorage.setItem("institution_head","Dr. Elizabeth M. Gacusana");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 742-6444");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","nlpsc_candon@yahoo.com");
		localStorage.setItem("address","San Nicolas, City of Candon, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1058'){
		localStorage.setItem("current_hei","Pangasinan State University - Main");
		localStorage.setItem("institution_head","Dr. Dexter R. Buted / Dr. Armando D. Junio");
		localStorage.setItem("institution_head_title","President / Executive Director");
		localStorage.setItem("telno","(072) 242-5676; (077) 888-3167; (075) 542-4261; (075) 542-4992");
		localStorage.setItem("fax","(075) 542-6466; (075) 542-8694");
		localStorage.setItem("email","president@psu.edu.ph");
		localStorage.setItem("address","Alvear Street, Lingayen, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1058'){
		localStorage.setItem("current_hei","Pangasinan State University - Alaminos City");
		localStorage.setItem("institution_head","Dr. Jessica J. Jimenez");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","N/A");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","psu.alaminos.campus@gmail.com");
		localStorage.setItem("address","Alaminos City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1064'){
		localStorage.setItem("current_hei","Pangasinan State University - Asingan");
		localStorage.setItem("institution_head","Dr. Ruby Rosa V. Cruz");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 563-2525");
		localStorage.setItem("fax","(075) 563-2525");
		localStorage.setItem("email","asingancampus@psu.edu.ph");
		localStorage.setItem("address","Domanpot, Asingan, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1065'){
		localStorage.setItem("current_hei","Pangasinan State University - Bayambang");
		localStorage.setItem("institution_head","Dr. Cesar G. Della");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 592-2027");
		localStorage.setItem("fax","(075) 592-2207");
		localStorage.setItem("email","bayambangcampus@psu.edu.ph");
		localStorage.setItem("address","Quezon Boulevard, Bayambang, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1066'){
		localStorage.setItem("current_hei","Pangasinan State University - Binmaley");
		localStorage.setItem("institution_head","Dr. Marcelo C. Gutierrez, Jr.");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 543-3012");
		localStorage.setItem("fax","(075) 542-6466");
		localStorage.setItem("email","binmaleycampus@psu.edu.ph");
		localStorage.setItem("address","Barangay San Isidro Norte, Binmaley, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1067'){
		localStorage.setItem("current_hei","Pangasinan State University - Infanta");
		localStorage.setItem("institution_head","Dr. Naominida C. Olermo");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","N/A");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","infantacampus@psu.edu.ph");
		localStorage.setItem("address","Bamban, Infanta, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1058a'){
		localStorage.setItem("current_hei","Pangasinan State University - Open University");
		localStorage.setItem("institution_head","Dr. Gemma M. De Vera");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 542-6464; (075) 542-6467");
		localStorage.setItem("fax","(075) 542-6466; (075) 542-8694");
		localStorage.setItem("email","president@psu.edu.ph");
		localStorage.setItem("address","Alvear Street, Lingayen, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1068'){
		localStorage.setItem("current_hei","Pangasinan State University - San Carlos City");
		localStorage.setItem("institution_head","Dr. Valentin B. Calpo, Jr.");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 532-2235");
		localStorage.setItem("fax","(075) 542-6467");
		localStorage.setItem("email","president@psu.edu.ph");
		localStorage.setItem("address","Roxas Boulevard, San Carlos City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1069'){
		localStorage.setItem("current_hei","Pangasinan State College - Sta. Maria");
		localStorage.setItem("institution_head","Dr. Priscilla L. Agsalud");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 574-5159");
		localStorage.setItem("fax","(075) 574-5159");
		localStorage.setItem("email","president@psu.edu.ph");
		localStorage.setItem("address","Ciangao, Sta. Maria, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1070'){
		localStorage.setItem("current_hei","Pangasinan State University - Urdaneta City");
		localStorage.setItem("institution_head","Dr. Paulo V. Cenas");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 568-2040; (075) 568-2568");
		localStorage.setItem("fax","(075) 568-2556");
		localStorage.setItem("email","psu_ippro2007@yahoo.com.ph");
		localStorage.setItem("address","San Vicente, Urdaneta City, Pangasinan");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
	if(instcode=='1080'){
		localStorage.setItem("current_hei","University of Northern Philippines");
		localStorage.setItem("institution_head","Dr. Gilbert R. Arce");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 722-2810");
		localStorage.setItem("fax","(077) 722-2810");
		localStorage.setItem("email","unp_op@yahoo.com");
		localStorage.setItem("address","Quirino Boulevard, City of Vigan, Ilocos Sur");
		
			$$.post('http://chedro1.com/m/functions.php', {action: "showprogram",instcode:instcode}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  
        '</li>';
		//console.log(display);
		$$('#programlist').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
	}
}	
	
	
	
	
	
	

	
$$(document).on('pageAfterAnimation', '.page[data-page="hei-details"]', function (e) {
  // Do something here when page with data-page="about" attribute loaded and initialized
	document.getElementById('hei_details_title').innerHTML = localStorage.getItem("current_hei");
	document.getElementById('hei_details_title2').innerHTML = localStorage.getItem("current_hei");
	document.getElementById('institution_head').innerHTML = localStorage.getItem("institution_head");
	document.getElementById('institution_head_title').innerHTML = localStorage.getItem("institution_head_title");
	document.getElementById('telno').innerHTML = localStorage.getItem("telno");
	document.getElementById('fax').innerHTML = localStorage.getItem("fax");
	document.getElementById('email').innerHTML = localStorage.getItem("email");
	document.getElementById('address').innerHTML = localStorage.getItem("address");


  //alert("dsa");
})  

function sendinquiry(){
	
	var iname = document.getElementById("inquiryname").value;
    var iphone = document.getElementById("inquiryphone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
	var selectunit = document.getElementById("selectunit").value;
	//alert(iname);
	//alert(iphone);
	
	$$.post('http://chedro1.com/m/inquiry.php', {iname: iname,iphone: iphone, email: email, message:message,selectunit:selectunit}, function (data,status) {
		myApp.alert('Inquiry Sent!');
		var closeinquiry = document.getElementById("closeinquiry");
		closeinquiry.click();
        
    },JSON);
	
}

function searchprogram(){
	
	var programkey = document.getElementById("searchprogram").value;
   
	
	$$.post('http://chedro1.com/m/functions.php', {action: "searchprogram",programkey:programkey}, function (data) {
		console.log(data);
		var datas = JSON.parse(data);
		
		var len = datas.length;
		
		for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +datas[i].mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  '<div class="accordion-item-content">'+
				'<div class="list-block">'+
				  '<ul>'+
					'<li>'+
					  '<div class="item-content">'+
					 
						'<div class="item-inner"> '+
						  '<div class="item-title">'
						  +datas[i].instname+
						  '</div>'+
						'</div>'+
					  '</div>'+
					'</li>'+
					
				  '</ul>'+
				'</div>'+
			  '</div>'+
        '</li>';
		//console.log(display);
		$$('#searchresultaccordion').append(display);
		 
		 
		 
		 
      }
        
    },JSON);
	
}