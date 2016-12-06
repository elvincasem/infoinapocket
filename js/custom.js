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
		
	var db = openDatabase('mydb2', '1.0', 'Test DB', 30 * 1024 * 1024);
	var db3 = openDatabase('mydb3', '1.0', 'Test DB', 30 * 1024 * 1024);
	db3.transaction(function (tx) {
		tx.executeSql('CREATE TABLE IF NOT EXISTS program (id, instname,mainprogram)');
		 tx.executeSql('DELETE FROM program');
		tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1135","SAINT JOHN BOSCO COLLEGE OF NORTHERN LUZON, INC.","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1135","SAINT JOHN BOSCO COLLEGE OF NORTHERN LUZON, INC.","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1135","SAINT JOHN BOSCO COLLEGE OF NORTHERN LUZON, INC.","Associate in Hotel and Restaurant Services ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1135","SAINT JOHN BOSCO COLLEGE OF NORTHERN LUZON, INC.","Associate in Computer Technology ")');
		
	});
db.transaction(function (tx) {
   tx.executeSql('CREATE TABLE IF NOT EXISTS program (id, instname,mainprogram)');
   tx.executeSql('DELETE FROM program');
   //tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1003","MALASIQUI AGNO VALLEY COLLEGE INC.","Bachelor of Secondary Education")');
   
   tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1003","MALASIQUI AGNO VALLEY COLLEGE INC.","Bachelor of Secondary Education ENGLISH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1003","MALASIQUI AGNO VALLEY COLLEGE INC.","Bachelor of Secondary Education MATH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1003","MALASIQUI AGNO VALLEY COLLEGE INC.","Bachelor of Elementary Education GENERAL CURRICULUM")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1005","ASBURY COLLEGE INCORPORATED","BACHELOR OF ARTS ENGLISH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1005","ASBURY COLLEGE INCORPORATED","BACHELOR OF ARTS CHRISTIAN EDUCATION")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1005","ASBURY COLLEGE INCORPORATED","BACHELOR OF ELEMENTARY EDUCATION GENERAL EDUCATION")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1005","ASBURY COLLEGE INCORPORATED","BACHELOR OF ELEMENTARY EDUCATION EARLY CHILDHOOD EDUCATION")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1005","ASBURY COLLEGE INCORPORATED","BACHELOR OF SECONDARY EDUCATION ENGLISH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1005","ASBURY COLLEGE INCORPORATED","BACHELOR OF SECONDARY EDUCATION FILIPINO")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1005","ASBURY COLLEGE INCORPORATED","BACHELOR OF SECONDARY EDUCATION MATHEMATICS")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1006","ASIACAREER COLLEGE FOUNDATION, INC.","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1006","ASIACAREER COLLEGE FOUNDATION, INC.","Bachelor of Science in Accounting Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1006","ASIACAREER COLLEGE FOUNDATION, INC.","Bachelor of Science in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1006","ASIACAREER COLLEGE FOUNDATION, INC.","Bachelor of Science in Business Administration Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1006","ASIACAREER COLLEGE FOUNDATION, INC.","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1006","ASIACAREER COLLEGE FOUNDATION, INC.","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1007","BACARRA MEDICAL CENTER SCHOOL OF MIDWIFERY","Diploma in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Business Administration E-Marketing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Business Administration Marketing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Business Administration w/ Web Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Business Administration E-Finance")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Business Administration Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Business Administration Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Business Administration Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Sciece in Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Tourism ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Bachelor of Science in Information Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1122","ABE INTERTIONAL COLLEGE OF BUSINESS AND ACCOUNTANCY - URDANETA CITY, INC.","Associate in Computer Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1101","AMA COMPUTER COLLEGE-DAGUPAN CITY, INC.","Bachelor of Science in Business Administration Human Resource Management, Financial Management, Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1101","AMA COMPUTER COLLEGE-DAGUPAN CITY, INC.","Bachelor of Science in Computer Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1101","AMA COMPUTER COLLEGE-DAGUPAN CITY, INC.","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1101","AMA COMPUTER COLLEGE-DAGUPAN CITY, INC.","Bachelor of Science in Electronics and Communication Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1101","AMA COMPUTER COLLEGE-DAGUPAN CITY, INC.","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1108","AMA COMPUTER  COLLEGE-SAN FERNANDO, LA UNION, INC.","Bachelor of Sicence in Information Technology  Information Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1108","AMA COMPUTER  COLLEGE-SAN FERNANDO, LA UNION, INC.","Bachelor of Science in Computer Science  Computer Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1102","AMA COMPUTER COLLEGE- LAOAG CITY INC","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION FINANCIAL MANAGEMENT")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1102","AMA COMPUTER COLLEGE- LAOAG CITY INC","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MARKETING MANAGEMENT")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1102","AMA COMPUTER COLLEGE- LAOAG CITY INC","BACHELOR OF SCIENCE IN COMPUTER SCIENCE ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1102","AMA COMPUTER COLLEGE- LAOAG CITY INC","BS IN INFORMATION TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1102","AMA COMPUTER COLLEGE- LAOAG CITY INC","BACHELOR OF SCIENCE IN COMPUTER ENGINEERING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1102","AMA COMPUTER COLLEGE- LAOAG CITY INC","BACHELOR OF SCIENCE IN ELECTRONICS ENGINEERING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1102","AMA COMPUTER COLLEGE- LAOAG CITY INC","BACHELOR OF SCIENCE IN ACCOUNTANCY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1145","BINALATONGAN COMMUNITY COLLEGE","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1145","BINALATONGAN COMMUNITY COLLEGE","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Master of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Pharmacy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Business adminisration Human Resource Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Hotel And Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Industrial Education Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Industrial Education Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Industrial Education Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Industrial Education (Ladderized) Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Industrial Technology Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Industrial Technology Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Industrial Technology Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Science in Electronics Enigneering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1012","CICOSAT COLLEGE, INC.","Bachelor of Public Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Doctor of Philosophy Educational Leadership and Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Master in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Master in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Master of Arts in Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Master in Education Educational Leadership")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Computer Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Electronics Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Electrical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Mechanical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Computer Science Internet Engineering")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Business Administration Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Business Administration Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Arts Mass Communication")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Elementary Education Early Childhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Elementary Education General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Elementary Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1014","COLEGIO DE DAGUPAN","Bachelor of Science in Psychology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1113","COLEGIO SAN JOSE DE ALAMINOS, INC.","Bachelor of Arts in Philosophy ")');

tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1113","COLEGIO SAN JOSE DE ALAMINOS, INC.","Bachelor of Arts in Mass Communication ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1113","COLEGIO SAN JOSE DE ALAMINOS, INC.","Bachelor in Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1113","COLEGIO SAN JOSE DE ALAMINOS, INC.","Bachelor in Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1113","COLEGIO SAN JOSE DE ALAMINOS, INC.","Bachelor in Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1113","COLEGIO SAN JOSE DE ALAMINOS, INC.","Bachelor in Secondary Education Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1113","COLEGIO SAN JOSE DE ALAMINOS, INC.","Bachelor in Secondary Education History")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1113","COLEGIO SAN JOSE DE ALAMINOS, INC.","Bachelor in Secondary Education Religious Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1113","COLEGIO SAN JOSE DE ALAMINOS, INC.","Bachelor of Science in Business Administration Operations Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1113","COLEGIO SAN JOSE DE ALAMINOS, INC.","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1113","COLEGIO SAN JOSE DE ALAMINOS, INC.","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1113","COLEGIO SAN JOSE DE ALAMINOS, INC.","Bachelor of Science in Office Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1114","COLEGIO DE SAN JUAN DE LETRAN-MANAOAG","BACHELOR OF ELEMENTARY EDUCATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1114","COLEGIO DE SAN JUAN DE LETRAN-MANAOAG","BACHELOR OF SECONDARY EDUCATION ENGLISH, MATH, RELIGIOUS EDUCATION")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1114","COLEGIO DE SAN JUAN DE LETRAN-MANAOAG","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION OPERATIONS MANAGEMENT, MARKETING MANAGEMENT")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1114","COLEGIO DE SAN JUAN DE LETRAN-MANAOAG","BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1114","COLEGIO DE SAN JUAN DE LETRAN-MANAOAG","BACHELOR OF SCIENCE IN COMPUTER SCIENCE ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1114","COLEGIO DE SAN JUAN DE LETRAN-MANAOAG","COMPUTER PROGRAMMING NC-IV ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1114","COLEGIO DE SAN JUAN DE LETRAN-MANAOAG","COMPUTER TECHNICIAN NC-II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Bachelor of Science in Computer Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Bachelor of Science in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Bachelor of Science in Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Programming NC IV ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Front Office Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Computer Hardware Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Qualifications in the Tourism Sector/Two Years Hotel & Restaurant Services (Housekeeping NC II, Bread/Pastry Production NC II,Front Office Services NC II, Bartending NC II, Tour Guiding Services NC II, Food & Beverage Services NC II, Commercial Cooking NC ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1017","DATA CENTER OF THE PHILIPPINES OF LAOAG CITY,INC.","Health Care Services NC II ")');


tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Doctor of Philosophy Development Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Doctor of Philosophy Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Master of Arts in Education General Education,Special Education, Chilldhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Master in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Master in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Associate in Arts ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Arts BA Communication, BA in English Language, Political Science, Legal Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Elementary Education General Education,Preschool Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Architecture ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Business Administration Management Accounting,Operation Management, Marketing Management,Financial Management,Human Resource & Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Biology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Computer Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Electronics & Communication Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor in Secondary Education Biological Science, Mathematics, Filipino, English, Social Studies, Religious Values Education, MAPE, Physical Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Electrical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Information System/Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Nutrition and Dietetics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Bachelor of Science in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Associate in Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Certificate in Building Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Certificate in Architectural Drafting ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Certificate in Hotel and Restaurant Services ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Certificate in Tourism Services ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Certificate in Computer Hardware and Services ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Certificate in Architecture Drafting  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1018","DIVINE WORD COLLEGE OF LAOAG","Certificate in Hotel and Restaurant  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1019","DIVINE WORD COLLEGE OF URDANETA","Bachelor of Arts Psychology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1019","DIVINE WORD COLLEGE OF URDANETA","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1019","DIVINE WORD COLLEGE OF URDANETA","Bachelor of Science in Secretarial Administration  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1019","DIVINE WORD COLLEGE OF URDANETA","Bachelor in Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1019","DIVINE WORD COLLEGE OF URDANETA","Bachelor in Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1019","DIVINE WORD COLLEGE OF URDANETA","Bachelor in Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1019","DIVINE WORD COLLEGE OF URDANETA","Bachelor in Secondary Education Values Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1019","DIVINE WORD COLLEGE OF URDANETA","Bachelor of Science in Commerce Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1019","DIVINE WORD COLLEGE OF URDANETA","Bachelor of Science in Commerce Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1019","DIVINE WORD COLLEGE OF URDANETA","Bachelor of Science in Business Administration Operational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Master in Business Administration Business Administration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Accountancy Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Business Administration Operation Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Business Administration Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Commerce Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Commerce Banking and Finance")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Commerce Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Commerce Entrepreneurship")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Commerce Cooperative Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Commerce Marketing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Commerce Office Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Hotel & Restaurant Management Under Ladderized Program Hotel & Restaurant Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Secondary Education General Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Secondary Education Guidance and Counseling")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Secondary Education Pehm")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Secondary Education Values Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Secondary Education Religious Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Secondary Education Social Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Elementary Education Profesional Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Elementary Education Pre- School Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Elementary Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Arts English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Arts Psychology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Arts Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Arts General Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Arts Social Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Arts Political Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Arts History")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Arts Library Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Arts Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Computer Science- Under Laderized Program Computer Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Information Technology Information Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Criminology Criminology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Bachelor of Science in Tourism Mgt Tourism")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Certificate of Religious Education Religious Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN"," Pc Operation NC-II")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN"," Computer Hardware Servicing NC-II")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN"," Programming NC-II")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN","Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN"," Food and Beverages NC-II")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN"," Hot Kitchen, Cathering and Baking NC-II")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1020","DIVINE WORD COLLEGE OF VIGAN"," Front Office And Room Services")');

tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Bachelor of Science in Information Technology  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Bachelor of Science in Tourism ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Diploma in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Three Year Certificate in Housekeeping NC II/Front Office NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Three Year Certificate in Front Office NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Two Year Certificate in Computer Hardware Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Two Year Certificate in Cookery NC II / Bartending NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Two Year Certificate in Travel Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Diploma in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Associate in Cooperative Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Diploma in Agricultural Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","One Year Certificate in PC Operations NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","One Year Certificate in Food and Beverage Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","One Year Certificate in Tour Guiding Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1032","ILOCOS SUR COMMUNITY COLLEGE ","Health Care Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1141","IMMACULATE CONCEPTION SCHOOL OF THEOLOGY","Master in Pastoral Ministry Pastoral Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1141","IMMACULATE CONCEPTION SCHOOL OF THEOLOGY","Master of Arts in Theology Systematic Theology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","BS in Business Administration Human Resource Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","BS in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","BS in Business Administration Operation Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","BS in Business Administration Business Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","BS in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Bachelor of Elementary Education General")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Bachelor of Secondary Education Physical Education Health and Music")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Bachelor of Secondary Education Technology and Livelihood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","BS in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","BS in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","BS in Travel Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Associate in Hotel and Restaurant Management (Ladderized) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Associate in Information Technology (Ladderized) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Bartending NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Caregiving NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Housekeeping NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Programming NC IV ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Front Office Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Health Care Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Cookery NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Bread & Pastry NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1132","INTERNATIONAL COLLEGES FOR EXCELLENCE, INC.","Food and Beverage Services NC II ")');

tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1128","KINGFISHER SCHOOL OF BUSINESS AND FINANCE","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1128","KINGFISHER SCHOOL OF BUSINESS AND FINANCE","Bachelor of Science in Entrepreneurship ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1128","KINGFISHER SCHOOL OF BUSINESS AND FINANCE","Bachelor of Science in Finance ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1128","KINGFISHER SCHOOL OF BUSINESS AND FINANCE","Bachelor of Science in Management Business Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1128","KINGFISHER SCHOOL OF BUSINESS AND FINANCE","Bachelor of Science in Management Financial And Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1128","KINGFISHER SCHOOL OF BUSINESS AND FINANCE","Bachelor of Science in Management Human Resources Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1128","KINGFISHER SCHOOL OF BUSINESS AND FINANCE","Bachelor of Science in Management Operation Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1128","KINGFISHER SCHOOL OF BUSINESS AND FINANCE","Bachelor of Science in Management Management Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1128","KINGFISHER SCHOOL OF BUSINESS AND FINANCE","Bachelor of Science in Management Business and Information Systems Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1128","KINGFISHER SCHOOL OF BUSINESS AND FINANCE","Bachelor of Science in Marketing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1124","LA FINNS SCHOLASTCA","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1124","LA FINNS SCHOLASTCA","Bachelor of Science in Nursing (Ladderized) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1124","LA FINNS SCHOLASTCA","Bachelor of Science in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1124","LA FINNS SCHOLASTCA","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1124","LA FINNS SCHOLASTCA","Bachelor of Science  in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1124","LA FINNS SCHOLASTCA","Bachelor of Science in Business Administration Financial Mgmt.,Marketing & HRDM")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1124","LA FINNS SCHOLASTCA","Bachelor of Science in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1124","LA FINNS SCHOLASTCA","Bachelor of Technical Teacher Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1124","LA FINNS SCHOLASTCA","Bachelor of Science in Travel Management  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1140","LA UNION CHRISTIAN COMPREHENSIVE COLLEGE INC.","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1140","LA UNION CHRISTIAN COMPREHENSIVE COLLEGE INC.","Housekeeping Services  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1140","LA UNION CHRISTIAN COMPREHENSIVE COLLEGE INC.","Food and Beverage Services  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1140","LA UNION CHRISTIAN COMPREHENSIVE COLLEGE INC.","Culinary Arts and Sciences ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1140","LA UNION CHRISTIAN COMPREHENSIVE COLLEGE INC.","Bread and Pastry Production ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1140","LA UNION CHRISTIAN COMPREHENSIVE COLLEGE INC.","Bartending ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1140","LA UNION CHRISTIAN COMPREHENSIVE COLLEGE INC.","Front Office Services ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","Bachelor of Science and Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","Programming NC IV  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","Computer Hardware Servicing NC II  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","Two year Hotel and Restaurant Management  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","One year Hotel and Restaurant Management  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","Caregiver NC II  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","Health Care Services NC II  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","Cookery NC II  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","Bread & Pastry Production NC II  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","Food and Beverages NC II  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","Housekeeping NC II  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1116","LA UNION COLLEGES  OF SCIENCE AND TECHNOLOGY, INC.","Food Processing NC II  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Master of Art in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Arts Psychology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Arts Family Counseling")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Arts Clinical Counseling")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Arts Parenting and Child Rearing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Arts Human Resource Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Secondary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Secondary Education Biology-Chemistry")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Secondary Education Mathematics- Physics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Secondary Education Applied Chemistry")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Secondary Education Physics-Chemistry")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Secondary Education Computer Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Secondary Education Bible-Theology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Business Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Business Administration Human Resource Management  and Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Pharmacy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of  Library and Information Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Travel and Tours Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Computer Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor in Medical Laboratory Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Physical Therapy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Respiratory Therapy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Bachelor of Science in Radiologic Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Biomedical Equipment Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Computer Programming NC IV ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Computer Hardware Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Photography NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Visual Graphic Design NC III ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Animation NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Animation (2D Digital) NC III ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","Animation (3D Digital) NC III ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1034","LORMA COLLEGES, INC.","2D Game Art Development NCIII ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1035","LUNA COLLEGES INC.","Master of Arts Psychology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1035","LUNA COLLEGES INC.","Master of Arts Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1035","LUNA COLLEGES INC.","Bachelor of Arts English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1035","LUNA COLLEGES INC.","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1035","LUNA COLLEGES INC.","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1035","LUNA COLLEGES INC.","Junior Secretarial Course Secretarial")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1035","LUNA COLLEGES INC.","Associate in Commercial Science Commercial Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1035","LUNA COLLEGES INC.","Associate in Arts Arts")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1035","LUNA COLLEGES INC.","General Clerical Course ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Bachelorof Secondary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Bachelor of Science in Hotel and Restaurant management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Bachelor of Science in Business Administration Operation Management, Financial Management, Business Economics, Human Resource Development Management, Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Ladderized Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Ladderized Bachelor of Science in Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Electrical Installation & Maintenance NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Consumer Electronics Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Machining NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Automotive Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Computer Hardware Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Food & Beverages Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1117","LUZON COLLEGE OF SCIENCE AND TECHNOLOGY (URDANETA) INCORPORATED","Commercial Cooking NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF ARTS IN MASS COMMUNICATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF ELEMENTARY EDUCATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF ACCOUNTANCY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE IN COMPUTER ENGINEERING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE IN COMPUTER SCIENCE ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE IN CRIMINOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE ELECTRONICS AND COMMUNICATION ENGINEERING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION Operations/Production Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE IN HOTEL AND RESTAURANT MANAGEMENT ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SECONDARY EDUCATION Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SECONDARY EDUCATION English ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SECONDARY EDUCATION Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE IN NURSING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE IN TOURISM ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","BACHELOR OF SCIENCE IN PHARMACY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","MIDWIFERY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","ASSOCIATE IN COMPUTER SECRETARIAL ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1037","LYCEUM NORTHERN LUZON, INC.","ASSOCIATE IN COMPUTER SCIENCE ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1110","LYCEUM-NORTHWESTERN UNIVERSITY URDANETA CAMPUS","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1110","LYCEUM-NORTHWESTERN UNIVERSITY URDANETA CAMPUS","Bachelor of Science in Business Admin. Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1110","LYCEUM-NORTHWESTERN UNIVERSITY URDANETA CAMPUS","Bachelor of Science in Comp. Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1110","LYCEUM-NORTHWESTERN UNIVERSITY URDANETA CAMPUS","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1110","LYCEUM-NORTHWESTERN UNIVERSITY URDANETA CAMPUS","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1110","LYCEUM-NORTHWESTERN UNIVERSITY URDANETA CAMPUS","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1110","LYCEUM-NORTHWESTERN UNIVERSITY URDANETA CAMPUS","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1110","LYCEUM-NORTHWESTERN UNIVERSITY URDANETA CAMPUS","Bachelor of Science in Torurism Hotel & Restaurant Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1104","MACRO COLLEGE, INC.","Bachelor of Science in Business Administration  E-commerce")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1104","MACRO COLLEGE, INC.","Bachelor of Science in Information Systems ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1104","MACRO COLLEGE, INC.","PC Operation NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1104","MACRO COLLEGE, INC.","Computer Hardware Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1104","MACRO COLLEGE, INC.","Computer Programming NC IV  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1104","MACRO COLLEGE, INC.","Hotel, Restaurant & Tourism Management Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Master in Business Administration International  Business Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Master in Business Administration Small- and Medium-Scale Enterprise Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Master in Business Administration General Business Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Master in Business Administration Executive MBA Course")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Master in Public Administration Public Safety Management (Police, Fire, Jail)")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Master in Public Administration Local Government Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Master in Public Administration Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Master in Public Administration General MPA Program")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Master in Public Administration Social Work and Community Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Master in Public Administration School Administration and Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Master in Public Administration Educational and Instructional Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Science in Civil Engineering ")');

tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Science in Business Administration Accounting Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Science in Business Administration Entrepreneurship Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Science in Business Administration Executive Office Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Science in Business Administration Marketing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Science in Tourism Hotel and Restaurant Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Science in Tourism Travel Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Arts Communications")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Elementary Education Early Childhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Elementary Education General Curriculum")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Elementary Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Secondary Education Music, Arts, Physical Education and Health")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Bachelor of Secondary Education Technology and Home Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Associate in Business Administration Accounting Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Associate in Business Administration Entrepreneurship Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Associate in Business Administration Executive Office Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Associate in Business Administration Marketing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Associate in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Associate in Tourism Hotel and Restaurant Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1098","METRO-DAGUPAN COLLEGES","Associate in Tourism Travel Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1119","MYSTICAL ROSE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Elementary Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1119","MYSTICAL ROSE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Elementary Education Enhanced General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1119","MYSTICAL ROSE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Secondary Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1119","MYSTICAL ROSE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1119","MYSTICAL ROSE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Business Administration Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1119","MYSTICAL ROSE COLLEGE OF SCIENCE AND TECHNOLOGY","Housekeeping NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1119","MYSTICAL ROSE COLLEGE OF SCIENCE AND TECHNOLOGY","Food and Beverage Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1119","MYSTICAL ROSE COLLEGE OF SCIENCE AND TECHNOLOGY","Commercial Cooking NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1119","MYSTICAL ROSE COLLEGE OF SCIENCE AND TECHNOLOGY","Bartending NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1119","MYSTICAL ROSE COLLEGE OF SCIENCE AND TECHNOLOGY","Front Office NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1129","NICOSAT COLLEGES INC.","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1129","NICOSAT COLLEGES INC.","Bachelor of Science in  Industrial Education Electronics/Automotive/Electrical")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1129","NICOSAT COLLEGES INC.","Bachelor of Science in Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1129","NICOSAT COLLEGES INC.","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1129","NICOSAT COLLEGES INC.","Automotive Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1129","NICOSAT COLLEGES INC.","Electrical Installation & Maintenance Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1083","NJ VALDEZ COLLEGES FOUNDATION","Bachelor of Science in Information Technology Information Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1083","NJ VALDEZ COLLEGES FOUNDATION","Bachelor of Science in Computer Science Computer")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1083","NJ VALDEZ COLLEGES FOUNDATION","Bachelor of Science in Accountancy Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1083","NJ VALDEZ COLLEGES FOUNDATION","Bachelor of Science in Commerce/Business Administration Entrepreneurship/Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1083","NJ VALDEZ COLLEGES FOUNDATION","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1083","NJ VALDEZ COLLEGES FOUNDATION","Bachelor of Secondary Education Math")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1083","NJ VALDEZ COLLEGES FOUNDATION","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1083","NJ VALDEZ COLLEGES FOUNDATION","Bachelor of Science in Industrial Education Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1083","NJ VALDEZ COLLEGES FOUNDATION","Bachelor of Science in Industrial Education Electricity")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1083","NJ VALDEZ COLLEGES FOUNDATION","Bachelor of Science in Industrial Education Auto-Diesel Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1083","NJ VALDEZ COLLEGES FOUNDATION","Associate in Radiologic Technology X-RAY TECHNICIAN")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1083","NJ VALDEZ COLLEGES FOUNDATION","Associate in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Doctor of Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Master of Arts in Education Instructional Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Master of Arts in Education Guidance & Counseling")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Master of Arts in Education Administration & Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Master in Public Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Arts English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Arts History")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Arts Political Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Arts Communication")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Arts Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Arts Environmental Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Science in Social Work ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Science in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Science in Tourism, Hotel & Restaurant Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Science in Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Science in Information System ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Elementary Education General")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Elementary Education Early Chilhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Secondary Education Values Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Secondary Education Social Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Secondary Education THE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Secondary Education PEHM/MAPEH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Science in Business Administration Human Resources Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Science in Business Administration Management Accounting ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Bachelor of Science in Business Administration Operations Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Associate in Tourism, Hotel & Restaurant Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Two-year Certificate Computer Secretarial Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Diploma in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1048","NORTHERN CHRISTIAN COLLEGE","Associate in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Master of Arts in Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Master of Arts in Religious Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Arts Theology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Arts English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Arts Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Arts Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Arts Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Arts History")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Arts Mass Communications")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Arts Political Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Secondary Education Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Secondary Education History")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Secondary Education Music")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","B.S.in Information and Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","B. S. in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Science in Secretarial Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","B. S. in Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Science in Commerce Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Science in Commerce Marketing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","B. S. in Business Administration Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","B. S. in Business Administration Marketing Mangement")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1050","NORTHERN LUZON ADVENTIST COLLEGE, INC.","Bachelor of Science in Psychology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1051","NORTHERN PHILIPPINES COLLEGE FOR MARITIME, SCIENCE AND TECHNOLOGY, INC.","Bachelor of Science in Marine Transportation ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1051","NORTHERN PHILIPPINES COLLEGE FOR MARITIME, SCIENCE AND TECHNOLOGY, INC.","Bachelor of Science in Marine Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1051","NORTHERN PHILIPPINES COLLEGE FOR MARITIME, SCIENCE AND TECHNOLOGY, INC.","Bachelor of Science in Electrical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1051","NORTHERN PHILIPPINES COLLEGE FOR MARITIME, SCIENCE AND TECHNOLOGY, INC.","Bachelor of Science in Mechanical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1051","NORTHERN PHILIPPINES COLLEGE FOR MARITIME, SCIENCE AND TECHNOLOGY, INC.","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1051","NORTHERN PHILIPPINES COLLEGE FOR MARITIME, SCIENCE AND TECHNOLOGY, INC.","Bachelor of Science in Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1051","NORTHERN PHILIPPINES COLLEGE FOR MARITIME, SCIENCE AND TECHNOLOGY, INC.","Bachelor of Science in information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1051","NORTHERN PHILIPPINES COLLEGE FOR MARITIME, SCIENCE AND TECHNOLOGY, INC.","Enhanced Support Level Program for Marine Transportation ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1051","NORTHERN PHILIPPINES COLLEGE FOR MARITIME, SCIENCE AND TECHNOLOGY, INC.","Enhanced Support Level Program for Marine Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1051","NORTHERN PHILIPPINES COLLEGE FOR MARITIME, SCIENCE AND TECHNOLOGY, INC.","Automotive Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1051","NORTHERN PHILIPPINES COLLEGE FOR MARITIME, SCIENCE AND TECHNOLOGY, INC.","Shielded Metal Arc Welding NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1051","NORTHERN PHILIPPINES COLLEGE FOR MARITIME, SCIENCE AND TECHNOLOGY, INC.","Shielded Metal Arc Welding NC I ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Doctor of Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Doctor of Philosophy Development Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Master of Arts in Education Early Childhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Master of Arts in Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Master of Arts in Education General Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Master of Arts in Education Guidance and Counseling")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Master of Arts in Education Language and Literature Teaching")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Master of Arts in Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Master of Arts in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Master of Arts in Public Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Master in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Master of Science in Criminal Justice with specialization in Criminology program ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Master of Science in Management Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Laws ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Computer Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Electrical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Electronics & Communications Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Geodetic Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Mechanical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Architecture ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Physical Therapy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Medical Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Arts English Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Arts Communication")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Arts Political Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Biology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Mathematics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Psychology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Business Administration Entreprenuership Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Business Administration Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Business Administration Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Hotel and Restaurant Management (LEP) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Hotel and Restaurant Management (LEP) Cruise Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Tourism ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Criminology (LEP) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Criminology (ETEEAP) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor in Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor in Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor in Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor in Secondary Education Math")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor in Secondary Education Physical Education, Health & Music")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor in Secondary Education Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Marine Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bachelor of Science in Marine Transportation ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","3-Year Academic Requirements leading to the Degree of Bachelor of Science in Marine Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","3-Year Academic Requirements leading to the Degree of Bachelor of Science in Marine Transportation ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Diploma in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Certificate in Medical Laboratory Assistant and Phlebotomy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Enhanced Support Level Program in Marine Deck ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Enhanced Support Level Program Marine Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Consumer Electronics Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Computer Hardware Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bartending NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Bread and Pastry Production NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Food and Beverages Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Housekeeping NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Commercial Cooking NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1052","NORTHWESTERN UNIVERSITY, INC.","Front Office Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1053","OSIAS EDUCATIONAL FOUNDATION","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1053","OSIAS EDUCATIONAL FOUNDATION","Bachelor of Secondary Education History")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1053","OSIAS EDUCATIONAL FOUNDATION","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1053","OSIAS EDUCATIONAL FOUNDATION","Bachelor of Arts English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1053","OSIAS EDUCATIONAL FOUNDATION","Bachelor of Arts History")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1053","OSIAS EDUCATIONAL FOUNDATION","Bachelor of Science in Commerce Banking and Finance")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1053","OSIAS EDUCATIONAL FOUNDATION","Bachelor of Science in Business Administration Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1053","OSIAS EDUCATIONAL FOUNDATION","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1054","PALARIS COLLEGES, INC.","Master of Arts in Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1054","PALARIS COLLEGES, INC.","Master of Arts in Education Administration and Supervision")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1054","PALARIS COLLEGES, INC.","Bachelor of Arts English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1054","PALARIS COLLEGES, INC.","Bachelor of Elementary Education General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1054","PALARIS COLLEGES, INC.","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1054","PALARIS COLLEGES, INC.","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1054","PALARIS COLLEGES, INC.","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1054","PALARIS COLLEGES, INC.","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1054","PALARIS COLLEGES, INC.","Bachelor of Science in Hotel and Restaurant Management(Ladderized) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1057","PANGASINAN MERCHANT MARINE ACADEMY","Bachelor of Science in Marine Transportation ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1057","PANGASINAN MERCHANT MARINE ACADEMY","Bachelor of Science in Marine Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1057","PANGASINAN MERCHANT MARINE ACADEMY","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1057","PANGASINAN MERCHANT MARINE ACADEMY","Bachelor of Science in Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1057","PANGASINAN MERCHANT MARINE ACADEMY","Bachelor of Science in Tourism ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1057","PANGASINAN MERCHANT MARINE ACADEMY","Bachelor of Science in Secondary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1057","PANGASINAN MERCHANT MARINE ACADEMY","Bachelor of Science in Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1057","PANGASINAN MERCHANT MARINE ACADEMY","Asso. Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1057","PANGASINAN MERCHANT MARINE ACADEMY","Automotive ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Bachelor of Secondary Education Math")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Bachelor of Secondary Education PEHM")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Bachelor of Science in Commerce Banking and Finance")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Bachelor of Science in Management Accounting ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Bachelor of Science in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Bachelor of Science in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Diploma in Associate Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Diploma in Associate Computer Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1127","PANPACIFIC UNIVERSITY NORTH PHILIPPINES - TAYUG CAMPUS INC.","Associate in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1100","PASS COLLEGE INC.","Bachelor of Science in Accountancy  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1100","PASS COLLEGE INC.","Bachelor of Science in Business Administration  Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1100","PASS COLLEGE INC.","Bachelor of Science in Computer Science  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1100","PASS COLLEGE INC.","Bachelor of Science in Hospitality Management  ")');

tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1100","PASS COLLEGE INC.","Bachelor of Elementary  Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1100","PASS COLLEGE INC.","Bachelor of Science in Accounting Technology  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1100","PASS COLLEGE INC.","Associate in Bookkeeping ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1100","PASS COLLEGE INC.","Associate in Computer Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1100","PASS COLLEGE INC.","Associate in Business Management  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1100","PASS COLLEGE INC.","Associate in Accounting Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1100","PASS COLLEGE INC.","Front Office Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1100","PASS COLLEGE INC.","Tour Guiding Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Science in Business Administration Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Science in Business Administration HRDM")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Secondary Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Secondary Education General Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Secondary Education TLE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Arts English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Science in Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Science in Tourism ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Science in Accounting Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Bachelor of Science in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Associate in Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Associate in Computer Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Associate in Computer Secretarial ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Associate in Agri-Business ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1059","PERPETUAL HELP COLLEGE OF PANGASINAN","Graduate in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Bachelor of Science in Business Administration Human Resource Management Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Bachelor of Elementary Education General Curriculum")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Bachelor of Elementary Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Bachelor of Elementary Education Pre-School Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Computer Hardworking Servicing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Computer Programming ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1133","PHILIPPINE COLLEGE OF NORTHWESTERN LUZON","Housekeeping ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Art in Journalism ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Elementary Education Enhanced General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Computer Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Secondary Education General Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Electronics Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Electrical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Marine Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Marine Transportation ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Mechanical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Marine Transportation (ESLPMD) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Bachelor of Science in Marine Engineering (ESLPME) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Two Year Graduate in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Associate In Hotel And Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Associate In Computer Technology (BSCS) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Associate In Computer Technology (BSIT) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Auto Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Electrical Installation and Maintenance NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Computer Hardware Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Consumer Electronics Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1061","PHILIPPINE COLLEGE OF SCIENCE AND TECHNOLOGY","Health Care Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1134","PHILIPPINE DARAKBANG THEOLOGICAL COLLEGE","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1134","PHILIPPINE DARAKBANG THEOLOGICAL COLLEGE","Bachelor of Secondary Education Theology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1150","PHINMA-UPANG  COLLEGE URDANETA, INC.","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1150","PHINMA-UPANG  COLLEGE URDANETA, INC.","Bachelor of Science in Accounting Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1150","PHINMA-UPANG  COLLEGE URDANETA, INC.","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1150","PHINMA-UPANG  COLLEGE URDANETA, INC.","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1150","PHINMA-UPANG  COLLEGE URDANETA, INC.","Bachelor of Science in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bachelor of Science in Marine Transportation ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bachelor of Science in Marine Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bachelor of Science in Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bachelor of Science in Electrical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bachelor in Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bachelor in Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bachelor of Science in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bachelor of Science in Electronics and Communication Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Housekeeping NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Front Office NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Food & Beverage NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Bartending NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Automotive Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Consumer Electronics Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Rating Forming of a Navigational Watch(STCW Regulation II/4) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Rating Forming of an Engineering Watch (STCW Regulation III/4) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1062","PIMSAT COLLEGES, INC.","Ship Catering NC I & II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1144","PIMSAT COLLEGES INCORPORATED - SAN CARLOS CITY","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1144","PIMSAT COLLEGES INCORPORATED - SAN CARLOS CITY","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1144","PIMSAT COLLEGES INCORPORATED - SAN CARLOS CITY","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1144","PIMSAT COLLEGES INCORPORATED - SAN CARLOS CITY","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1144","PIMSAT COLLEGES INCORPORATED - SAN CARLOS CITY","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1144","PIMSAT COLLEGES INCORPORATED - SAN CARLOS CITY","Bachelor of Sciencein Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1144","PIMSAT COLLEGES INCORPORATED - SAN CARLOS CITY","Bachelor of Science in Information technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1144","PIMSAT COLLEGES INCORPORATED - SAN CARLOS CITY","Bachelor Of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1144","PIMSAT COLLEGES INCORPORATED - SAN CARLOS CITY","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1144","PIMSAT COLLEGES INCORPORATED - SAN CARLOS CITY","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Master of Arts Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Master of Arts Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Master of Arts English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Master of Arts Public Administration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Bachelor of Science in Marine Transportation ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Bachelor of Science Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Bachelor of Science in Business Administration Human Resource Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Bachelor of Secondary Education Math")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Bachelor of Secondary Education MAPEH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","BS in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1060","POLYTECHNIC COLLEGE OF LA UNION","Automotive Servicing NC I ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1137","ROSALES WESLEYAN BIBLE COLLEGE, INC.","Bachelor of Arts Theology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1137","ROSALES WESLEYAN BIBLE COLLEGE, INC.","Bachelor of Arts Religious Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1073","SAINT COLUMBANS COLLEGE, INC.","Bachelor of Science in Business Administration Human Resource Development Mgt.")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1073","SAINT COLUMBANS COLLEGE, INC.","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1073","SAINT COLUMBANS COLLEGE, INC.","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1073","SAINT COLUMBANS COLLEGE, INC.","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1073","SAINT COLUMBANS COLLEGE, INC.","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1073","SAINT COLUMBANS COLLEGE, INC.","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1073","SAINT COLUMBANS COLLEGE, INC.","Bachelor of Secondary Education Religious Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1073","SAINT COLUMBANS COLLEGE, INC.","Diploma in Secretarial Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1073","SAINT COLUMBANS COLLEGE, INC.","Caregiving NC II Course ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1135","SAINT JOHN BOSCO COLLEGE OF NORTHERN LUZON, INC.","Bachelor of Science in Criminology )');/*
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1135","SAINT JOHN BOSCO COLLEGE OF NORTHERN LUZON, INC.","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1135","SAINT JOHN BOSCO COLLEGE OF NORTHERN LUZON, INC.","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1135","SAINT JOHN BOSCO COLLEGE OF NORTHERN LUZON, INC.","Associate in Hotel and Restaurant Services ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1135","SAINT JOHN BOSCO COLLEGE OF NORTHERN LUZON, INC.","Associate in Computer Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Doctor of Education(Ed.D ) Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Doctor of Philosophy in Management (Ph DM) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Master of Arts in Education(MAed) Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Master of Arts in Education(MAed) English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Master of Arts in Education(MAed) Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Master of Arts in Education(MAed) Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Master in Business Administration(MBA) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Master in Pubic Administraton(MPA) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Master in Library and Information Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Laws(Ll.B) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Arts (A.B) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Arts (A.B) English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Arts (A.B) Political Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor on Secondary Education(B.S.Ed) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor on Secondary Education(B.S.Ed) Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor on Secondary Education(B.S.Ed) English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor on Secondary Education(B.S.Ed) Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor on Secondary Education(B.S.Ed) Math")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor on Secondary Education(B.S.Ed) PHEM - Health & Music is under PHEM")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor on Secondary Education(B.S.Ed) RVE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor in Elementary Education(BEEd) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor in Elementary Education(BEEd) SPED")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor in Elementary Education(BEd) PRE-SCHOOL")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in Architecture(Ladderized) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in Industrial Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in  Business Administration(formerly Bachelor of Science in Commerce) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in  Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in  Business Administration Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in  Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in  Business Administration Operations Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in Hotel & Restaurant Management(BS HRM) Ladderized ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in Tourism Management (BSTM) Ladderized ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in Accountancy(BSA) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in Accounting Technology(BSAT)Ladderized ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in Office Administration(BSOA) Ladderized ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in Information Technology(BSIT) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of  Science in Psychology(BS Psych) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor in Library and Information Science(BLIS) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in Criminology( BS Crim) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor in Library and Information Science(BLIS) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","Bachelor of Science in Criminology( BS Crim) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","CERTIFICATE IN COMPUTER AIDED DRAFTING & DESIGN (CADD) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","CERTIFCATE IN BUILDING TECHNOLOGY & UTILITIES (CBTU) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","CERTIFICATE IN DRAFTING TECHNOLOGY (CDT) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","COMPUTER SECRETARIAL COURSE (CSC) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","CERTIFICATE OF ASSOCIATE ACCOUNTING (CAT) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","FRONT OFFICE SERVICES NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","HOUSEKEEPING NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","COMMERCIAL COOKING NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","BAKING AND PASTRY PRODUCTION NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","BARTENDING NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1074","SAINT LOUIS COLLEGE","TRAVEL SERVICES NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1121","ST. THERESE COLLEGE FOUNDATION","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Secondary Education Music, Arts, P.E. and Health")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Secondary Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Elementary Education (General Education) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Elementary Education Early Childhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Elementary Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Science in Business Administration Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Bachelor of Science in Information System ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Associate in Computer Technology (ladderized under BSCS) NA")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Associate in Computer Technology (ladderized under BSIT) NA")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Associate in Computer Technology (ladderized under BSIS) NA")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Two-Year Junior Secretarial Course NA")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Two-Year Computer Hardware Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1077","SAN CARLOS COLLEGE, INC.","Two-Year Computer Programming NC IV ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1078","SEA AND SKY COLLEGE, INC.","BACHELOR OF ARTS IN COMMUNICATION ARTS  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1078","SEA AND SKY COLLEGE, INC.","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION FINANCIAL MANAGEMENT ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1078","SEA AND SKY COLLEGE, INC.","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MARKETING MANAGEMENT ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1078","SEA AND SKY COLLEGE, INC.","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION OPERATIONS MANAGEMENT ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1078","SEA AND SKY COLLEGE, INC.","BACHELOR OF SCIENCE IN AIRLINE SECRETARIAL ADMINISTRATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1078","SEA AND SKY COLLEGE, INC.","BACHELOR OF SCIENCE IN HOTEL AND RESTAURANT MANAGEMENT ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1078","SEA AND SKY COLLEGE, INC.","BACHELOR OF SCIENCE IN  TRAVEL AND TOURISM MANAGEMENT ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1078","SEA AND SKY COLLEGE, INC.","BACHELOR OF ARTS IN BROADCASTING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1149","SEÑOR TESORO COLLEGE","Bachelor of Science in Travel Management  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1149","SEÑOR TESORO COLLEGE","Bachelor of Science in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1149","SEÑOR TESORO COLLEGE","Bachelor of Science in Entrepreneurship ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1149","SEÑOR TESORO COLLEGE","Bachelor of Technical Teachers Food and Service Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","BACHELOR OF SCIENCE IN COMPUTER SCIENCE  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","BACHELOR OF SCIENCE IN CRIMINOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","BACHELOR OF SECONDARY EDUCATION Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","BACHELOR OF SECONDARY EDUCATION English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","PROGRAMMING NC IV ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","COMPUTER HARDWARE SERVICING NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","AUTOMOTIVE SERVICING NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","ELECTRICAL INSTALLATION AND MAINTENANCE NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","CONSUMER ELECTRONICS SERVICING NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","FOOD AND BEVERAGE SERVICES NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","FRONT OFFICE SERVICES NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","HEALTH CARE SERVICES NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1115","SOUTH ILOCANDIA COLLEGE OF ARTS AND TECHNOLOGY","CAREGIVING NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1075","ST. MARYS COLLEGE STA. MARIA, ILOCOS SUR, INC.","Master of Arts in Education Educational Management in Administration and Supervision")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1075","ST. MARYS COLLEGE STA. MARIA, ILOCOS SUR, INC.","Bachelor of Elementary Education English")');/*
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Business Administration Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Business Administration Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Business Administration Marketing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Business Administration Entrepreneursip")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Business Administration Human Resources Development Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Arts  English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Arts  Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Arts  Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Arts  Religious Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor in Secondary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor in Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor in Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor in Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor in Secondary Education Home Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor in Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor in Elementary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor in Elementary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor in Elementary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor in Elementary Education Home Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor in Elementary Education General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Bachelor of Science in Entrepreneurship ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1076","ST. PAUL COLLEGE OF ILOCOS SUR","Associate in Computer Technology  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1105","STA. VERONICA COLLEGE, INC.","Bachelor of Science in Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1105","STA. VERONICA COLLEGE, INC.","Bread and Pastry Production ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1105","STA. VERONICA COLLEGE, INC.","Commercial  Cooking NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1105","STA. VERONICA COLLEGE, INC.","Front Office Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1105","STA. VERONICA COLLEGE, INC.","Computer Hardware Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1105","STA. VERONICA COLLEGE, INC.","Computer Programming NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1105","STA. VERONICA COLLEGE, INC.","Automovtive Servicing NCI ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1107","STI COLLEGE DAGUPAN, INC","BACHELOR OF SCIENCE IN COMPUTER SCIENCE  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1107","STI COLLEGE DAGUPAN, INC","BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1107","STI COLLEGE DAGUPAN, INC","BACHELOR OF SCIENCE IN HOTEL & RESTAURANT MANAGEMENT  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1107","STI COLLEGE DAGUPAN, INC","ASSCIATE IN COMPUTER TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1107","STI COLLEGE DAGUPAN, INC","BACHELOR OF SCIENCE IN ACCOUNTING TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1107","STI COLLEGE DAGUPAN, INC","BACHELOR OF SCIENCE IN TOURISM MANAGEMENT  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1148","STI EDUCATION SERVICES GROUP, INC.","BC Doctoral NA")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1148","STI EDUCATION SERVICES GROUP, INC.","BC Masters None")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1148","STI EDUCATION SERVICES GROUP, INC.","Post Baccalaureate Post Baccalaureate")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1148","STI EDUCATION SERVICES GROUP, INC.","BACHELOR OF SCIENCE IN COMPUTER SCIENCE NA")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1148","STI EDUCATION SERVICES GROUP, INC.","PRE BACCALAUREATE NONE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1148","STI EDUCATION SERVICES GROUP, INC.","2-YEAR INFORMATION TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1148","STI EDUCATION SERVICES GROUP, INC.","2-YEAR COMPUTER AND CONSUMER ELECTRONICS TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1148","STI EDUCATION SERVICES GROUP, INC.","2-YEAR HOSPITALITY AND RESTAURANT SERVICES ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1148","STI EDUCATION SERVICES GROUP, INC.","3-YEAR HOTEL AND RESTAURANT ADMINISTRATOR ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1147","STI COLLEGE VIGAN","BACHELOR OF SCIENCE IN COMPUTER SCIENCE ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1106","STI COLLEGE - SAN FERNANDO CITY INC.","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1106","STI COLLEGE - SAN FERNANDO CITY INC.","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1002","THE ADELPHI COLLEGE","MASTER OF ARTS GUIDANCE AND COUNSELING")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1002","THE ADELPHI COLLEGE","MASTER OF ARTS EDUCATIONAL MANAGEMENT")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1002","THE ADELPHI COLLEGE","BACHELOR OF ELEMENTARY EDUCATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1002","THE ADELPHI COLLEGE","BACHELOR OF SECONDARY EDUCATION ENGLISH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1002","THE ADELPHI COLLEGE","BACHELOR OF SECONDARY EDUCATION MATHEMATICS")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1002","THE ADELPHI COLLEGE","BACHELOR OF SECONDARY EDUCATION FILIPINO")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1002","THE ADELPHI COLLEGE","BACHELOR OF SECONDARY EDUCATION PHYSICAL SCIENCE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1002","THE ADELPHI COLLEGE","BACHELOR OF SECONDARY EDUCATION GENERAL SCIENCE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1002","THE ADELPHI COLLEGE","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION FINANCIAL MANAGEMENT")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1002","THE ADELPHI COLLEGE","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION OPERATIONAL MANAGEMENT")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1002","THE ADELPHI COLLEGE","BACHELOR OF ARTS ENGLISH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1002","THE ADELPHI COLLEGE","ASSOCIATE IN SECRETARIAL ADMINISTRATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Bachelor of Elementary Education Elementary Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Bachelor of Secondary Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Bachelor of Secondary Education Physical Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Bachelor of Arts English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Bachelor of Arts History")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Bachelor of Science in Accountancy Accountancy")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Bachelor of Science in Business Administration Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Diploma in Midwifery Midwifery")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Food and Beverage Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Housekeeping NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Front Office Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Commercial Cooking NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Bookeeping NC III ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Computer Hardware Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Consumer Electronics Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Automotive Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Electrical Installation Maintenance NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1029","THE GREAT PLEBEIAN COLLEGE","Caregiving NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Master of Arts in Nursing Medical-Surgical")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Master of Arts in Nursing Nursing Aministration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Master of Arts in Nursing Community Health Nursing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Master of Arts in Nursing Maternal and Child Nursing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Master of Arts in Education Teacher Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Master of Arts in Education Pre-School Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Elementary Education Pre-School")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Elementary Education General")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Secondary Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Secondary Education MAPEH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Arts  History")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Arts  Political Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Arts  English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Science in Business Administration Human Resources Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Science in Office Administration Office Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Science in Office Administration Computer Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Bachelor of Science in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1079","UNION CHRISTIAN COLLEGE","Associate in Computer Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor of Science in Hotel and Restaurant Management  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor of Science in Tourism Management  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor of Science in Information Technology  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor of Science in Business Administration  Marketing Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor of Science in Business Administration  Financial Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor of Science in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor in Secondary Education  Mathematics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor in Secondary Education  English ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor in Secondary Education  Biology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor in Secondary Education  Physical Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor in Elementary Education  Pre Elementaruy Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor in Elementary Education  Special Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor of Technical Teacher Education  Automotive")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor of Technical Teacher Education  Electrical ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor of Science in Accounting Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Bachelor of Science in Criminology  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Diploma in Midwifery  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1136","UNIVERSITY OF EASTERN PANGASINAN","Associate in Hotel and Restaurant Management  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1036","UNIVERSITY OF LUZON","\N")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Doctor of Education Higher Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Master of Arts in Education School Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Master of Arts in Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Master of Arts in Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Master in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Master of Science in Management Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Master in Education Educational Leadership")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Laws ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Architecture ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Computer Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Electronics Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Mechanical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Electrical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Elementary Education Pre-School")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Arts in Political Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Arts in Communication ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor in Medical Laboratory Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Pharmacy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Physical Therapy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Management Accounting ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Accounting Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Business Administration HRD Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Business Administration Operations Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Information Systems ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bachelor of Science in Office Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Diploma in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Medical Assistant Course ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Associate in Computer Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Associate in Computer Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Certificate in Building Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Automotive NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Caregiving NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1081","UNIVERSITY OF PANGASINAN","Bookkeeping NC III ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","DOCTOR OF EDUCATION EDUCATIONAL MANAGEMENT")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","DOCTOR OF PUBLIC ADMINISTRATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","MASTER OF ARTS IN EDUCATION EDUCATIONAL MANAGEMENT")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","MASTER OF ARTS IN EDUCATION GUIDANCE & COUNSELING")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","MASTER OF ARTS IN EDUCATION MATHEMATICS")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","MASTER OF ARTS IN EDUCATION SCIENCE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","MASTER IN EARLY CHILDHOOD EDUCATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","MASTER OF ARTS IN SPECIAL EDUCATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","MASTER OF ARTS IN PHYSICAL EDUCATION AND SPORTS ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","MASTER IN BUSINESS ADMINISTRATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","MASTER OF ARTS IN NURSING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","MASTER IN PUBLIC HEALTH ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","MASTER IN PUBLIC ADMINISTRATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Juris Doctor ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor in Elementary Education General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor in Elementary Education Early Childhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor in Elementary Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor in Secondary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor in Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor in Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor in Secondary Education General Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor in Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor in Secondary Education Physical Education, Health and Music")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor in Secondary Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Business Administration Business Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Business Administration Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Business Administration Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Business Administration Operation Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Psychology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Arts Political Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Arts Communication")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Electrical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Electronics Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Mechanical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Computer Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Architecture ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Pharmacy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Social Work ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor in Library & Information Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Alternative Medicine ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Bachelor of Science in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Associate in Computer Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Associate in Computer Secretarial ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Two-Year Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Two-Year Course in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Health Care Services ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Hotel and Restaurant Services ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Housekeeping NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Front Office Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Commercial Cooking ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Food and Beverage Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Baking ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Tour Guiding Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1084","URDANETA CITY UNIVERSITY","Caregiving NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Doctor of Philosophy Business Administration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Doctor of Philosophy Development Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Doctor of Philosophy Science Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master of Science In Biology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master of Science In Teaching General Science/Elementary Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master of Science In Teaching Guidance and Counceling ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master of Science In Teaching Language ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master of Science In Teaching Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master of Science In Teaching PEHM")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master of Science In Teaching Values Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master of Science In Teaching Science and Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master of Science In Teaching Science and Technology 4")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master of Science in Management Engineering  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master in Public Health ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master in Public Administration  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master of Arts In Nursing  Nursing Service ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Master of Arts In Nursing  Nursing Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Doctor of Dental Medicine  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Doctor of Veterinary Medicine ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Doctor of Medicine  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Laws ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Biology Trimester ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Biology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Arts Psychology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Arts English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Arts Political Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Pharmacy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Nursing  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor in Medical Labarotory Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Radiologic Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Electrical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Electronics  Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Mechanical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Physical Therapy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Elementary Education Specialization in Pre-School Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Elementary Education Specialization In Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Secondary  Education Biological Sciences ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Secondary  Education English ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Secondary  Education Guidance and Counseling")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Secondary  Education MAPE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Secondary  Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Secondary  Education Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Secondary  Education Values Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Business Administration Office Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Business Administration Business Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Business Administration Management Accounting                                                               ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Business Administration Marketing Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Business Administration Operations Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Business Administration Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Business Administration Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Libarary and Information Science Academic Librarianship")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Bachelor of Science in Midwiery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Diploma in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Associate in Radiologic Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Associate in Radiologic Technology Leading to Bachelor of Science in Radiologic Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Associate in Office Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Associate in Computer Technolgy leading to Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Biomedical Equipment Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Consumer Electronic Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Caregiving NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Health Care Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1086","VIRGEN MILAGROSA UNIVERSITY FOUNDATION","Animal Health Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","PhD in Technology Education Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","PhD in Development Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","PhD in Science Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","PhD in Mathematics Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Master in Science Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Master in Development Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Master in Development Administration Public Administration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Master in Development Administration Business Administration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Master of Arts in Technology Education Technical-Vocational Schools Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Master of Arts in Technology Education Teknolohiyang Edukasyon, Pantahanan at Pangkabuhayan")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Master of Arts in Technology Education Technology Areas")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Master of Arts in Technology Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Master in Management Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Master in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Mechanical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Electrical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Arts in Political Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Arts in Public Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Arts in English Language ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Arts in Filipino Language ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor in Public Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Office Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Business Administration Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Political Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Psychology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Elementary Education Generalist")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Elementary Education Generalist Major")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Elementary Education General Curriculum")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Elementary Education Pre-School Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Secondary Education Physical Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Secondary Education Music, Arts, Physical Education and Health")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Secondary Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Education Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Education Cosmetology Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Education Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Education Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Education Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Education Food Trades Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Education Garments Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Education Hard Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Education Mathematics for Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Education Technology and Home Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Education Technology and Livelihood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Technology Automotive")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Technology Civil")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Technology Cosmetology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Technology Drafting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Technology Electrical ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Technology Electronics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Technology Food Trades")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Technology Furniture and Cabinet Making")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Technology Machine Shop")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Industrial Technology Refrigeration and Air Conditioning")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Electro-Mechanical Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Food Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Textile and Garment Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - MID LA UNION CAMPUS","Bachelor of Laws ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","Ph.D. in Agricultural Education Agricultural Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","Ph.D. in Extension Education Extension Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","Ph.D. in Agronomy Agronomy")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","Ph.D. in Educational Administration Educational Administration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","Ph.D. in Animal Science Animal Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","MS in Agricultural Education Agricultural Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","MS in Rural Community Development Rural Community Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","MS in Animal Science Animal Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","MS in Agronomy Agronomy")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","MS in Agroforestry Agroforestry")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","MS in Environmental Studies Environmental")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","MS Technology and Livelihood Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","MS Sericulture Sericulture")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","MS Educational Mgmt ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","MS in Agribusiness Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","Master  in  Agroforestry Agroforestry")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","Diploma in Agroforestry Agroforestry")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","Doctor of Veterinary Medicine ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BS Agr"l Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BS Agriculture (1st year to 3rd year) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BS Agriculture  Animal Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BS Agriculture  Crop Science - Agronomy")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BS Agriculture  Crop Science - Horticulture")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BS Agriculture  Apiculture")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BElementary Education (1st year) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BElementary Education  General Curriculum")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BElementary Education  Pre-School Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BSecondary Education (1st year) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BSecondary Education  Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BSecondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BSecondary Education  English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BSecondary Education  MAPEH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BSecondary Education  Math")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BSecondary Education  Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BSecondary Education  TLE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BSAgroforestry Watershed Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BS Forestry ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BSAgriBusiness Mgmt  Entrepreneurship")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BSAgriBusiness Mgmt  Cooperative")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BSEnvironmental Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BS Information Systems ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BS in Biology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1026","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - NORTH LA UNION CAMPUS","BA in English Language ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023a","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - OPEN UNIVERSITY SYSTEM","PhD in Development Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023a","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - OPEN UNIVERSITY SYSTEM","Master in Development Administration Local Government Administration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023a","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - OPEN UNIVERSITY SYSTEM","Master in Development Administration Law Enforcement Administration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023a","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - OPEN UNIVERSITY SYSTEM","Master of Arts in Science Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023a","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - OPEN UNIVERSITY SYSTEM","Diploma in Local Government Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023a","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - OPEN UNIVERSITY SYSTEM","Diploma in Law Enforcement Administration  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023a","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - OPEN UNIVERSITY SYSTEM","Certificate/Diploma in Teaching ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023a","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - OPEN UNIVERSITY SYSTEM","Certificate in Early Childhood Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023a","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - OPEN UNIVERSITY SYSTEM","Bachelor of Science in Agriculture Horticulture")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023a","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - OPEN UNIVERSITY SYSTEM","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023a","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - OPEN UNIVERSITY SYSTEM","Bachelor in Elementary Education Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1023a","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - OPEN UNIVERSITY SYSTEM","Certificate in Entrepreneurship ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Doctor of Philosophy in Educational Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Doctor of Philosophy in Science Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Doctor of Philosophy in Mathematics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Master in Development Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Master of Arts in Educational Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Master of Arts in Guidance and Counseling ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Master of Arts in Language Teaching ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Master of Arts in Mathematics Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Master of Arts in Science Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Master of Arts in Teaching Music ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Master of Arts in Special Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Master of Arts in Physical Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Master of Science in Biology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Master of Arts in Teaching Home Economics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF ELEMENTARY EDUCATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF ELEMENTARY EDUCATION General Curriculum")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF ELEMENTARY EDUCATION Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF ELEMENTARY EDUCATION Pre-School Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF ELEMENTARY EDUCATION Education Units")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SECONDARY EDUCATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SECONDARY EDUCATION English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SECONDARY EDUCATION Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SECONDARY EDUCATION Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SECONDARY EDUCATION Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SECONDARY EDUCATION Music,Arts & Physical Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SECONDARY EDUCATION Technology & Livelihood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SECONDARY EDUCATION Physical Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SECONDARY EDUCATION Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SECONDARY EDUCATION Information Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SECONDARY EDUCATION Education Units")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SCIENCE IN BIOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SCIENCE IN MATHEMATICS ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SCIENCE IN PSYCHOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF ARTS IN ENGLISH LANGUAGE ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF ARTS IN FILIPINO LANGUAGE ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SCIENCE IN COMPUTER SCIENCE (STRAIGHT) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SCIENCE IN COMPUTER SCIENCE (LADDERIZED) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SCIENCE IN NURSING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SCIENCE IN FISHERIES  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF SCIENCE IN AGRICULTURE ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","BACHELOR OF AGRICULTURAL TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Diploma in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1021","DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY - SOUTH LA UNION CAMPUS","Diploma in Agricultural Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","MS Education General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","MS Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","MS Education General Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","MS Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","MS Education TLE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","MS Agriculture Agronomy")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","MS Agriculture Rural Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","MS Agriculture Animal Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","Master of Arts in Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","Master of Arts in Education Technology ad Livelihood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Agricultural Engineering Agricultural Engineering")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Agricultural Education Crop Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Agricultural Education Animal Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","Bachelor of Elementary Education Elementary Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","Bachelor of Secondary Education Secondary Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","Bachelor of Secondary Education Physical Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","Bachelor of Secondary Education Technology and Livelyhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Home Technology Education Home Technology Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Agriculture Agriculture")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Agriculture Agribusiness Management and Entrepreneurship")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Agriculture Animal Husbandry")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Agriculture Agronomy")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Agriculture Post-Harvest Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Agriculture Horticulture")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Forestry Forestry")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Information Systems Information Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Information Technology Information Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Hospitality Management Hotel and Restaurant Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","Diploma in Agricultural Technology-Bachelor in Agricultural Technology Agricultural Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1031","ILOCOS SUR POLYTECHNIC STATE COLLEGE","BS Development Communication Development Communication")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1044","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF AGRICULTURE, FOOD AND SUSTAINABLE DEVELOPMENT)- DINGRAS","Bachelor of Agricutural Technology Animal Production Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1044","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF AGRICULTURE, FOOD AND SUSTAINABLE DEVELOPMENT)- DINGRAS","Bachelor of Agricutural Technology Crop Production Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1044","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF AGRICULTURE, FOOD AND SUSTAINABLE DEVELOPMENT)- DINGRAS","Diploma of Agricultural Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1043","MARIANO MARCOS STATE UNIVERSITY-COLLEGE OF AQUATIC SCIENCES AND APPLIED TECHNOLOGY","Bachelor of Science in Marine Biology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1043","MARIANO MARCOS STATE UNIVERSITY-COLLEGE OF AQUATIC SCIENCES AND APPLIED TECHNOLOGY","Bachelor of Science in Fisheries ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1043","MARIANO MARCOS STATE UNIVERSITY-COLLEGE OF AQUATIC SCIENCES AND APPLIED TECHNOLOGY","Certificate in Fisheries Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor in Automotive Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Education Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Education Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Education Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Education Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Education Food Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Education Garments Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Technical Teacher Education Computer Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Technical Teacher Education Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Technical Teacher Education Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Technical Teacher Education Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Technical Teacher Education Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Technical Teacher Education Food & Service Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Technical Teacher Education Garments, Fashion & Design")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Technology Civil Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Technology Ceramics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Technology Computer Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Technology Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Technology Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Technology Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Technology Electronics & Communications Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Technology Food Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Technology Garments Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Bachelor of Science in Industrial Technology Refrigeration & Airconditioning Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BTTE Ladderized) Computer Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BTTE Ladderized) Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BTTE Ladderized) Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BTTE Ladderized) Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BTTE Ladderized) Electrical technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BTTE Ladderized) Food & Service Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BTTE Ladderized) Garments, Fashion & Design")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BSIT Ladderized) Ceramics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BSIT Ladderized) Computer Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BSIT Ladderized) Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BSIT Ladderized) Electrical technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BSIT Ladderized) Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BSIT Ladderized) Food Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BSIT Ladderized) Garments Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BSIT Ladderized) Civil Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BSIT Ladderized) Refrigeration & Airconditioning Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Technology(BSIT Ladderized) Electronics & Communications Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Certificate of Proficiency in Automotive Technology (BAT Ladderized)                   ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BTTE Ladderized) Computer Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BTTE Ladderized) Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BTTE Ladderized) Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BTTE Ladderized) Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BTTE Ladderized) Electrical technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BTTE Ladderized) Food & Service Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BTTE Ladderized) Garments, Fashion & Design")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BSIT Ladderized) Ceramics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BSIT Ladderized) Civil Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BSIT Ladderized) Computer Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BSIT Ladderized) Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BSIT Ladderized) Electrical technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BSIT Ladderized) Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BSIT Ladderized) Electronics & Communications Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BSIT Ladderized) Food Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BSIT Ladderized) Garments Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Technology  (BSIT Ladderized) Refrigeration & Airconditioning Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1046","MARIANO MARCOS STATE COLLEGE UNIVERSITY-( COLLEGE OF INDUSTRIAL TECHNOLOGY)- LAOAG CITY","Diploma of Automotive Technology (BAT Ladderized)) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Doctor of Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Biology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Chemistry")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Early Childhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Language and Literature")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Wika at Panitikan")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Guidance & Counceling")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Ilokano Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Library & Information Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education MSEPK/MAPEH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Physics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Technician Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Technical-Vocational Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Arts in Education Technology & Home Econimics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Education Early Childhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Education Library & Information Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Education MSEPK/MAPEH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Education technician Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Education Technical-Vocational Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Master of Education Technology & Home Econimics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Teacher Certificate Program ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Diploma in Early Childhood Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Professional Education -(1-5) / (Distance Learning Program 7-13) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Bachelor of Elementary Education Generalist")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Bachelor of Elementary Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Bachelor of Elementary Education Pre-school Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Bachelor of Secondary Education English ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Bachelor of Secondary Education Music, Arts & Physical Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Bachelor of Secondary Education Physical Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Bachelor of Secondary Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1045","MARIANO MARCOS STATE UNIVERSITY (COLLEGE OF TEACHER EDUCATION)-LAOAG CITY","Bachelor of Secondary Education Technology & Livelihood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Doctor of Philosophy Linguistics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Doctor of Philosophy Rural Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Doctor of Philosophy Crop Production Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Arts in English Language and Literature ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Arts in Mathematics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Arts in Nursing Maternal & Child Health Nursing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Arts in Nursing Medical-Surgical Nursing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master in Nursing Maternal & Child Health Nursing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master in Nursing Medical-Surgical Nursing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master in Information Technology  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master in Management Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master in Management Strategic Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Arts in Public Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master in Public Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Science in Agriculture  Crop Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Science in Animal Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master in Animal Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Science in Crop Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master in Crop Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Science in Biology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master in Biological Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Science in Engineering Agricultural Engineering")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Science in Engineering Soil & Water Resources Engineering")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master in Engineering Agricultural Engineering")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master in Engineering Soil & Water Resources Engineering")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Science in Mathematics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Science in Rural Development ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master in Rural Development ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Master of Science in Agroforestry ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Laws ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Doctor of Medicine ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Agribusiness ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Agriculture Agricultural Extension")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Agriculture Animal Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Agriculture Crop Science/Agronomy")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Agriculture Horticulture")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Agriculture Agricultural Entrepreneurship")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Agriculture Soil Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Agriculture Agricultural Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Agriculture Agricultural Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Agriculture Crop Protection")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Development Communication ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Environmental Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Forestry ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Arts in English Studies English as a Second language")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Arts in English Studies Communication Arts")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Arts in Communication ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Arts in English Language ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Arts in Sociology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Biology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Mathematics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Accounting Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Business Administration Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Business Administration Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Business Administration Tourism Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Cooperative Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Economics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Entrepreneurship ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of science in Tourism Management Tour & Travel Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of science in Tourism Management International Services Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Agricultural Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Ceramic Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Chemical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Computer Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Electrical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Electronics Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Mechanical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Meteorology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Pharmacy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Bachelor of Science in Phsyical Therapy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Certificate of Agricultural TechnologyScience ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Certificate in Accouting Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Associate in Tourism Promotion & Tour Guiding Services International Services Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Associate in Tourism Promotion & Tour Guiding Services Tour & Travel Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Diploma in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Diploma in Tour & Travel Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1040","MARIANO MARCOS STATE UNIVERSITY","Diploma in International Services Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Secondary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Secondary Education Social Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Secondary Education MAPEH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Secondary Education Music")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Arts ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Arts Political Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Arts English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Science in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Science in Business Administration Human Resource Dev"t. Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Science in Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Bachelor of Science in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Associate in Medical Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Associate in Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1082","NORTH LUZON PHILIPPINES STATE COLLEGE","Certificate in Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Arts in Economics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Arts in English Language ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Public Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Biology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Business Administration Operations Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Mathematics Computer Information Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Mathematics Pure Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Mathematics Statistics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Nutrition and Dietetics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Social Work ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Secondary Education Industrial Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Secondary Education Physical Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Secondary Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Secondary Education Technology and Livelihood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Technical Teacher Education Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Technical Teacher Education Ceramics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Technical Teacher Education Civil Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Technical Teacher Education Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Technical Teacher Education Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Technical Teacher Education Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Technical Teacher Education Food Service Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Technical Teacher Education Garments, Fashion and Design Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Technical Teacher Education Mechanical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Industrial Technology Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Industrial Technology Ceramics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Industrial Technology Civil Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Industrial Technology Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Industrial Technology Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Industrial Technology Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Industrial Technology Food Service Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Industrial Technology Garments, Fashion and Design Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Industrial Technology Mechanical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Industrial Education Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Industrial Education Ceramics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Industrial Education Civil Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Industrial Education Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Industrial Education Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Industrial Education Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Industrial Education Food Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Industrial Education Garment Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058","PANGASINAN STATE UNIVERSITY","Bachelor of Science in Industrial Education Machine Shop Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Doctor of Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Doctor of Public Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Doctor of Education Educational Administration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Education Guidance")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Education Cultural Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Teaching  English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Teaching  Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Teaching  Home Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Teaching  Physical Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Teaching  Practical Arts")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Science in Teaching Chemistry")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Science in Teaching Physics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Mathematics Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Public Administration Governmental Administration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Public Administration Local Government")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Public Administration Police Administration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Nursing Maternal & Child Nursing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Guidance & Counseling ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Statistics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Science in Criminal Justice  Specialization in Criminology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Education (OU) Science Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Education (OU) Mathematics Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Social Work (OU) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Arts in Nursing (OU) Maternal & Child Nursing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Master of Public Administration (OU) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Doctor of Medicine ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Laws ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Arts ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Arts in Mass Communication ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Arts in Communications ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Arts in Political Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Arts in Tourism ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Tourism ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Biology (General) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Biology (Marine) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Biology (Spl Program) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Physics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Mathematics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Environmental Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Psychology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Psychology (Spl Program) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Elementary Education Early Childhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Elementary Education General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Elementary Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Secondary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Secondary Education MAPEH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Secondary Education Physical Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Secondary Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Industrial Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Industrial Education Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Industrial Education Cosmetology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Industrial Education Electrical Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Industrial Education Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Industrial Education Food Service & Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Industrial Education Garments and Fashion Design ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Industrial Education Home Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Industrial Education Practical Arts")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Library and Information Science Academic Librarianship")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Business Administration Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Business Administration Human Resource Dev"t. Mgt.")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Business Administration (OU) ETEEAP Human Resource Dev"t. Mgt.")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Entrepreneurship ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Cooperative Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Hotel & Restaurant Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Hotel & Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Nursing (Step Ladder) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Medical Laboratory Services ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Comm Health Mgt. ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","BS in Comm Health Mgt. (Spl Program) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Social Work ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Geodetic Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Sanitary Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Law Enforcement Admin ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Criminology(OU) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Architecture ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Fine Arts Painting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Fine Arts Visual Communication")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Fine Arts Advertising Arts")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Interior Design ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Industrial Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Industrial Technology Automotive")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Industrial Technology Electricity")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Industrial Technology Electronics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Arts in Public Administration  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Medical Technology   ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Bachelor of Science in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Certificate in Health Aide ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Certificate in Midwifery  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Certificate in Emergency Medical Technician ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1080","UNIVERSITY OF NORTHERN PHILIPPINES","Certificate in Emergency Medical Responder ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1130","ASIAN INSTITUTE OF E-COMMERCE INC.","\N")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1016","DAGUPAN COLLEGES FOUNDATION","Bachelor of Science in Radiologic Technology  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1016","DAGUPAN COLLEGES FOUNDATION","Bachelor of Secondary Education  English ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1016","DAGUPAN COLLEGES FOUNDATION","Bachelor of Secondary Education  Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1016","DAGUPAN COLLEGES FOUNDATION","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1016","DAGUPAN COLLEGES FOUNDATION","Gradautes in Midwifery  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1016","DAGUPAN COLLEGES FOUNDATION","Two-Year Course in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1016","DAGUPAN COLLEGES FOUNDATION","Two-Year Course in Computer Secretarial ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1016","DAGUPAN COLLEGES FOUNDATION","Two-Year Course in Dental Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1016","DAGUPAN COLLEGES FOUNDATION","Two-Year Course in Computer Secretarial ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1016","DAGUPAN COLLEGES FOUNDATION","Pharmacy Aide ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1111","DATA CENTER COLLEGE OF THE PHILIPPINES OF VIGAN CITY, ILOCOS SUR, INC.","\N")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1109","GOLDEN WEST COLLEGES, INC.","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1109","GOLDEN WEST COLLEGES, INC.","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1109","GOLDEN WEST COLLEGES, INC.","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1109","GOLDEN WEST COLLEGES, INC.","Bachelor of Science in Business Administration  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1109","GOLDEN WEST COLLEGES, INC.","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1109","GOLDEN WEST COLLEGES, INC.","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1109","GOLDEN WEST COLLEGES, INC.","Bachelor of Science in Industrial Education Electricity Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1109","GOLDEN WEST COLLEGES, INC.","Bachelor of Science in Industrial Education Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1109","GOLDEN WEST COLLEGES, INC.","Bachelor of Science in Industrial Education Auto-Diesel Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1109","GOLDEN WEST COLLEGES, INC.","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1109","GOLDEN WEST COLLEGES, INC.","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1109","GOLDEN WEST COLLEGES, INC.","Two-Year Associate in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Master in Business Administration International  Business Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Master in Business Administration Small- and Medium-Scale Enterprise Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Master in Business Administration General Business Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Master in Business Administration Executive MBA Course")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Master in Public Administration Public Safety Management (Police, Fire, Jail)")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Master in Public Administration Local Government Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Master in Public Administration Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Master in Public Administration General MPA Program")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Master in Public Administration Social Work and Community Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Master in Public Administration School Administration and Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Master in Public Administration Educational and Instructional Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Science in Business Administration Accounting Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Science in Business Administration Entrepreneurship Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Science in Business Administration Executive Office Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Science in Business Administration Marketing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Science in Tourism Hotel and Restaurant Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Science in Tourism Travel Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Arts Communications")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Elementary Education Early Childhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Elementary Education General Curriculum")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Elementary Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Secondary Education Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Secondary Education Music, Arts, Physical Education and Health")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Bachelor of Secondary Education Technology and Home Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Associate in Business Administration Accounting Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Associate in Business Administration Entrepreneurship Development")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Associate in Business Administration Executive Office Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Associate in Business Administration Marketing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Associate in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Associate in Tourism Hotel and Restaurant Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","Associate in Tourism Travel Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","SECONDARY (GRADE 7 - 12) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","ELEMENTARY (GRADE 1 - 6) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1041","MARY HELP OF CHRISTIANS COLLEGE SEMINARY","PRE-SCHOOL (KINDER, ETC.) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1146","MARY HELP OF CHRISTIANS THEOLOGY SEMINARY","Bachelor of Arts Philosophy")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1142","POLYTECHNIC COLLEGES OF REGION 1,INC.","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION FINANCIAL MANAGEMENT")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1142","POLYTECHNIC COLLEGES OF REGION 1,INC.","BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1131","ST. CAMILLUS COLLEGE OF MANANAOG FOUNDATION, INC","Bachelor of Elementary Education General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1131","ST. CAMILLUS COLLEGE OF MANANAOG FOUNDATION, INC","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1131","ST. CAMILLUS COLLEGE OF MANANAOG FOUNDATION, INC","Bahelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1131","ST. CAMILLUS COLLEGE OF MANANAOG FOUNDATION, INC","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1131","ST. CAMILLUS COLLEGE OF MANANAOG FOUNDATION, INC","Bachelor of Science in Business Administration Human Resource Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1131","ST. CAMILLUS COLLEGE OF MANANAOG FOUNDATION, INC","Bachelor of Science in Business Administration Marketing")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1131","ST. CAMILLUS COLLEGE OF MANANAOG FOUNDATION, INC","Bachelor of Science in Entrepreneurship ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1131","ST. CAMILLUS COLLEGE OF MANANAOG FOUNDATION, INC","Bachelor of Science in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1131","ST. CAMILLUS COLLEGE OF MANANAOG FOUNDATION, INC","Programming NC-IV ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1131","ST. CAMILLUS COLLEGE OF MANANAOG FOUNDATION, INC","Health Care Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1143","WCC AERONAUTICAL AND TECHNOLOGICAL COLLEGE, INCORPORATED","Bachelor Science in Tourism Management with Flight Attendant Course Tourism Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1143","WCC AERONAUTICAL AND TECHNOLOGICAL COLLEGE, INCORPORATED","Bachelor Science in Aviation major in Commercial Flying Commercial Flying")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1143","WCC AERONAUTICAL AND TECHNOLOGICAL COLLEGE, INCORPORATED","Bachelor of Science in Aeronautical Engineering Aeronautical Engineering")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1143","WCC AERONAUTICAL AND TECHNOLOGICAL COLLEGE, INCORPORATED","Bachelor of Science in Aviation major in Airline Operations Management Airline Operations Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1143","WCC AERONAUTICAL AND TECHNOLOGICAL COLLEGE, INCORPORATED","Bachelor of Science in Aircraft Maintenance Technology Aircraft Maintenance Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1143","WCC AERONAUTICAL AND TECHNOLOGICAL COLLEGE, INCORPORATED","BS Business Administration Management, Management Acctg.,Financial Management, Entrepreneurial Management, Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1143","WCC AERONAUTICAL AND TECHNOLOGICAL COLLEGE, INCORPORATED","BS E-Commerce ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1143","WCC AERONAUTICAL AND TECHNOLOGICAL COLLEGE, INCORPORATED","BS IT ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1143","WCC AERONAUTICAL AND TECHNOLOGICAL COLLEGE, INCORPORATED","BS Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Science in Hospitality Management Hotel and Restaurant Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Science in Hotel and Restaurant Management Hotel and Restaurant Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Science in Tourism Tourism Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Science in Tourism Management Tourism Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Science in Information Technology (Old Curriculum) Information Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Science in Information Technology (New Curriculum) Information Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Secondary Education Technology and Livelihood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","REMARKS: NONE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Science in Hospitality Management BR 521 s. 2011")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Science in Hotel and Restaurant Management CMO 53")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Science in Tourism CMO 30 s.2006")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Science in Tourism Management BR 628 s. 2013")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Science in Information Technology (Old Curriculum) CMO 30")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Science in Information Technology (New Curriculum) CMO 24 s. 2015")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Secondary Education CMO 30 s. 2004")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Secondary Education CMO 30 s. 2004")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1094","Ilocos Sur Polytechnic State College-Candon","Bachelor of Secondary Education CMO 30 s. 2004")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1091","Ilocos Sur Polytechnic State College-Cervantes","MS in Education General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1091","Ilocos Sur Polytechnic State College-Cervantes","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1091","Ilocos Sur Polytechnic State College-Cervantes","Bachelor of Secondary Education TLE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1091","Ilocos Sur Polytechnic State College-Cervantes","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1091","Ilocos Sur Polytechnic State College-Cervantes","Diploma in Agricultural Technology leading to Bachelor of Agricultural Technology Agricultural Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1091","Ilocos Sur Polytechnic State College-Cervantes","Hotel and Restaurant Management (Ladderized) Hotel and Restaurant Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1091","Ilocos Sur Polytechnic State College-Cervantes","Information Technology (Ladderized) Information Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Master of Science in Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Master of Science in Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Master of Science in Education Math")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Master of Science in Education General Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Master of Science in Education General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Master of Arts in Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Secondary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Secondary Education MAPEH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Science in Mathematics ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Arts ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Arts in Psychology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Arts in English Language ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Arts in Social Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Science in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Science in Entrepreneurship ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1089","Ilocos Sur Polytechnic State College-College of Arts and Sciences-Tagudin","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Technology Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Technology Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Technology Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Technology Food technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Technology Apparel Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Technology Cosmetology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor in Technical Teacher Education Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor in Technical Teacher Education Garments, Fasion and Design")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor in Technical Teacher Education Food Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor in Technical Teacher Education Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor in Technical Teacher Education Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor in Technical Teacher Education No Major Enrolled")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Education Technology and Livelihood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Education Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Education Electronics Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Education Electrical technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Education Apparel Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Education Food Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","Bachelor of Science in Industrial Education Cosmetology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1088","Ilocos Sur Polytechnic State College-College of Engineering and Technology-Santiago","2- Year Certificate in Computer Technology Information Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1090","Ilocos Sur Polytechnic State College-College of Fisheries and Marine Sciences-Narvacan","Bachelor of Science in Fisheries General Fisheries")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1090","Ilocos Sur Polytechnic State College-College of Fisheries and Marine Sciences-Narvacan","Bachelor in Secondary Education Technology & Home Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1090","Ilocos Sur Polytechnic State College-College of Fisheries and Marine Sciences-Narvacan","Bachelor in Secondary Education MAPEH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1090","Ilocos Sur Polytechnic State College-College of Fisheries and Marine Sciences-Narvacan","Bachelor in Secondary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1090","Ilocos Sur Polytechnic State College-College of Fisheries and Marine Sciences-Narvacan","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1090","Ilocos Sur Polytechnic State College-College of Fisheries and Marine Sciences-Narvacan","Bachelor of Science in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058b","PANGASINAN STATE UNIVERSITY - ALAMINOS CITY","Bachelor of Elementary Education Enhanced General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058b","PANGASINAN STATE UNIVERSITY - ALAMINOS CITY","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058b","PANGASINAN STATE UNIVERSITY - ALAMINOS CITY","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058b","PANGASINAN STATE UNIVERSITY - ALAMINOS CITY","Bachelor of Science in Business Administration Operations Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058b","PANGASINAN STATE UNIVERSITY - ALAMINOS CITY","Bachelor of Science in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058b","PANGASINAN STATE UNIVERSITY - ALAMINOS CITY","Bachelor of Science in Information Technology  ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058b","PANGASINAN STATE UNIVERSITY - ALAMINOS CITY","Bachelor of Science in Agriculture ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Secondary Education  English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Secondary Education  Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Secondary Education  Physical Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Secondary Education  Technology & Livelihood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Elementary Education General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Science in Industrial Technology Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Science in Industrial Technology Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Science in Industrial Technology Electronics & Computer Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Science in Industrial Technology Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Science in Industrial Technology Mechanical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Science in Industrial Technology Food Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Bachelor of Science in Industrial Technology Garment Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Associate in Industrial Technology Automotive Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Associate in Industrial Technology Drafting Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Associate in Industrial Technology Electronics & Computer Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Associate in Industrial Technology Electrical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Associate in Industrial Technology Mechanical Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Associate in Industrial Technology Food Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1064","PANGASINAN STATE UNIVERSITY, ASINGAN CAMPUS","Associate in Industrial Technology Garment Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Elementary Education General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Secondary Education  1st yr Gen Ed Subjects")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Secondary Education  Physics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Secondary Education  Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Secondary Education  Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Secondary Education  Chemistry")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Secondary Education  Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Secondary Education  Music, Arts, Physical Education and health")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Secondary Education  Technology and Livelihood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Secondary Education  Communication Arts-English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Secondary Education  Communication Arts-Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Secondary Education  Physical Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Science in Information and Communications Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Public Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Arts in English Language ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1065","PANGASINAN STATE UNIVERSITY, BAYAMBANG CAMPUS","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1066","PANGASINAN STATE UNIVERSITY, BINMALEY CAMPUS","Bachelor of Science in Fisheries ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1066","PANGASINAN STATE UNIVERSITY, BINMALEY CAMPUS","Bachelor of Secondary Education Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1066","PANGASINAN STATE UNIVERSITY, BINMALEY CAMPUS","Bachelor of Science in Environmental Studies/Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1066","PANGASINAN STATE UNIVERSITY, BINMALEY CAMPUS","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1066","PANGASINAN STATE UNIVERSITY, BINMALEY CAMPUS","Bachelor of Science in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1067","PANGASINAN STATE UNIVERSITY, INFANTA CAMPUS","Bachelor of Science in Agriculture ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1067","PANGASINAN STATE UNIVERSITY, INFANTA CAMPUS","Bachelor of Elementary Education Enhanced General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1067","PANGASINAN STATE UNIVERSITY, INFANTA CAMPUS","Bachelor of Secondary Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1058a","PANGASINAN STATE UNIVERSITY-OPEN UNIVERSITY SYSTEMS, LINGAYEN, PANGASINAN","DOCTOR OF EDUCATION Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1068","PANGASINAN STATE UNIVERSITY, SAN CARLOS CITY CAMPUS","Bachelor of Elementary Education General Enhanced Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1068","PANGASINAN STATE UNIVERSITY, SAN CARLOS CITY CAMPUS","Bachelor of Science in Agriculture General Curriculum")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1068","PANGASINAN STATE UNIVERSITY, SAN CARLOS CITY CAMPUS","Bachelor of Secondary Education  Technology & Livelihood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1068","PANGASINAN STATE UNIVERSITY, SAN CARLOS CITY CAMPUS","Bachelor of Secondary Education  Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1068","PANGASINAN STATE UNIVERSITY, SAN CARLOS CITY CAMPUS","Bachelor of Secondary Education  Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1068","PANGASINAN STATE UNIVERSITY, SAN CARLOS CITY CAMPUS","Bachelor of Science in Information and Communications Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1068","PANGASINAN STATE UNIVERSITY, SAN CARLOS CITY CAMPUS","Bachelor of Science in Business Administration Human Resources Development Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1068","PANGASINAN STATE UNIVERSITY, SAN CARLOS CITY CAMPUS","Bachelor of Science in Hospitality Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1068","PANGASINAN STATE UNIVERSITY, SAN CARLOS CITY CAMPUS","Bachelor of Science in Office Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Science in Agriculture No Major (Generalized)")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Science in Agriculture Animal Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Science in Agriculture Crop Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Science in Agriculture Agricultural Extension")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Secondary Education Technology & Livelihood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Secondary Education Agricultural Technology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Elementary Education Enhanced General Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Science in Ag. Education (Elementary) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Science in Ag. Education (Secondary) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Science in Ag. Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Agricultural Technology (BAT) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Science in Agribusiness Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Bachelor of Science in Community Development ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1069","PANGASINAN STATE UNIVERSITY, STA. MARIA CAMPUS","Two-Year Diploma in Agricultural Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Doctor of Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Doctor of Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Doctor of Education Guidance and Counseling")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Doctor of Philosophy Development Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Education Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Education Communication Arts-English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Education Communication Arts-Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Education Guidance and Counseling")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Education Home Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Education Science Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Education Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Education Social Studies")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Education Computer Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Education Instructioanl Leadership")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Education Early Childhood")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master in Management Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Science in Agriculture Crop Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Science in Agriculture Animal Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master in Development Management Public Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","Master of Arts in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","BS ARCHITECTURE ARCHITETURE")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","BS CIVIL ENGINEERING ENGINEERING")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","BS COMPUTER ENGINEERING ENGINEERING")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","BS ELECTRICAL ENGINEERING ENGINEERING")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","BS INFO AND COMM TECHNOLOGY INFO AND COMM TECH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","BS INFO  TECHNOLOGY INFORMATION TECHNOLOGY")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","BS IN MATHEMATICS MATHEMATICS")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","BS MECHANICAL ENGINEERING ENGINEERING")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","BS ARTS AND ENGLISH ENGLISH")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","B SECONDARY EDUCATION EDUCATION")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1070","PANGASINAN STATE UNIVERSITY, URDANETA CITY CAMPUS","B ELEMENTARY EDUCATION EDUCATION")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","DOCTOR OF PHILOSOPHY Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","DOCTOR OF PHILOSOPHY Public Administration")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER OF ARTS IN EDUCATION Educational Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER IN EDUCATION English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER IN EDUCATION Biology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER IN EDUCATION Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER IN EDUCATION Physical Education, Health & Music")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER IN EDUCATION Special Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER IN EDUCATION Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER IN EDUCATION Early Childhood Education")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER IN EDUCATION Social Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER IN EDUCATION General Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER IN PUBLIC ADMINISTRATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER OF SCIENCE IN CRIMINOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","MASTER IN BUSINESS ADMINISTRATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","JURIS DOCTOR ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN NURSING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN PHARMACY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN OFFICE ADMINISTRATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN CRIMINOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN ELECTRICAL TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN COMPUTER SCIENCE ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SECONDARY EDUCATION Filipino")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SECONDARY EDUCATION Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SECONDARY EDUCATION English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SECONDARY EDUCATION PEHM")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SECONDARY EDUCATION Social Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SECONDARY EDUCATION Biological Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF ELEMENTARY EDUCATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN ELECTRONICS TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT (formerly BSHRM) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION Operations Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION Human Resource Development Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION Business Economics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF ARTS English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF ARTS Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF ARTS Biology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF ARTS Psychology")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN MANAGEMENT ACCOUNTING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN ACCOUNTANCY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN COMPUTER ENGINEERING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN ELECTRONICS  ENGINEERING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN TOURISM MANAGEMENT (FORMERLY bs Tourism) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN MARINE TRANSPORTATION ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN CIVIL ENGINEERING ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF LIBRARY AND INFORMATION SCIENCE ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN COMMERCE Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN COMMERCE Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","BACHELOR OF SCIENCE IN LEGAL MANAGEMENT ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","DIPLOMA IN MIDWIFERY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","DIPLOMA IN ASSOCIATE COMPUTER SCIENCE ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","DIPLOMA IN ASSOCIATE COMPUTER TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","ASSOCIATE ELECTRONICS TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","ASSOCIATE ELECTRICAL TECHNOLOGY ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","ASSOCIATE IN HOSPITALITY MANAGEMENT ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1055","PANPACIFIC UNIVERSITY NORTH PHILIPPINES","ASSOCIATE MECHANICAL TECHNOLOGY (ADM) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Doctor of Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Doctor in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Doctor of Public Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Doctor of Philosophy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Master of Arts in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Master in Public Health ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Master of Arts in Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Master in Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Master in Business Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Master in Public Administration ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Master in Public Administration (PCL) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Doctor of Medicine ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Laws ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Doctor of Dental Medicine ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Doctor of Optometry ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Physical Therapy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Civil Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Electrical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Mechanical Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Computer Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Electronics and Communication Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Marine Transportation ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Marine Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Nursing ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Pharmacy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Biology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Psychology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Radiologic Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor in Medical Laboratory Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Information Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Computer Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Tourism Hotel and Restaurant Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Tourism Travel Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Travel Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Tourism Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Criminology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Accountancy ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Architecture ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Commerce Management Accounting")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Commerce Management (ETEEAP)")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Business Administration Financial Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Science in Business Administration Marketing Management")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Arts (ETEEAP) ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Arts in English ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Arts in Mass Communication ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Arts in Political Science ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor in Elementary Education ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Secondary Education English")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Secondary Education Mathematics")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Bachelor of Secondary Education Physical Science")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Two-Year Dental Technology ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Diploma in Midwifery ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Associate in Marine Transportation ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Associate in Marine Engineering ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Associate in Hotel and Restaurant Management ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Medical Transcription ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Automotive Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Health Care Services NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","RAC Servicing NCII ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Caregiving NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Computer Hardware Servicing NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Electrical Installation Maintenace NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Shielded Metal Arc Welding NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Consumer Electronics Servicing NC II ")');

tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Commercial Cooking NC ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Housekeeping NC II ")');
tx.executeSql('INSERT INTO program (id, instname,mainprogram) VALUES ("1103","LYCEUM-NORTHWESTERN UNIVERSITY","Food and Beverage Services NC II ")');

*/


});


	
	//alert("test");
		
}


function searchprogram(){
	
	var programsearchtext = document.getElementById("searchprogram").value;
	//var displaycontainer = document.getElementById("searchresultaccordion");
	//displaycontainer.innerHTML="";
	//$$('#searchresultaccordion').remove()
	//console.log(programsearchtext);
	var db = openDatabase('mydb2', '1.0', 'Test DB', 2 * 1024 * 1024);
	db.transaction(function (tx) {
   tx.executeSql('SELECT * FROM program where mainprogram like "%'+programsearchtext+'%"', [], function (tx, results) {
      var len = results.rows.length, i;
	  console.log(len);
      //msg = "<p>Found rows: " + len + "</p>";
      //document.querySelector('#status').innerHTML +=  msg;
	 //alert(msg);
	
      for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = '<li class="accordion-item"><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title"><h3>'
			  +results.rows.item(i).mainprogram+
			  '</h3></div>'+
            '</div></a>'+
			  '<div class="accordion-item-content">'+
				'<div class="list-block">'+
				  '<ul>'+
					'<li>'+
					  '<div class="item-content">'+
					 
						'<div class="item-inner"> '+
						  '<div class="item-title">'
						  +results.rows.item(i).instname+
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
	
   }, null);
   
    
});
}

function showdetails(instcode){
	console.log(instcode);
	
	//db function
		
		var db = openDatabase('mydb2', '1.0', 'Test DB', 2 * 1024 * 1024);
	db.transaction(function (tx) {
   tx.executeSql('SELECT * FROM program where id= "'+instcode+'"', [], function (tx, results) {
      var len = results.rows.length, i;
	  //console.log(len);

      for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		 var programname = results.rows.item(i).mainprogram;
		
		var display = '<li><a href="#" class="item-link item-content"><div class="item-inner"><div class="item-title">'+programname+'</div></div></a></li>';
			
		//var display=programname;
		console.log(display);
		$$('#programlist').append(display);
		
		 
		 
		 
      }
	
   }, null);
   
    
});
		
		//end db function
	
	
	
	
	
	
	
	if(instcode=='1122'){
		localStorage.setItem("current_hei","ABE International College of Business and Accountancy");
		localStorage.setItem("institution_head","Ms. Jeannie J. Bruan");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(075) 656-2028; (075) 568-8130");
		localStorage.setItem("fax","(075) 568-8130");
		localStorage.setItem("email","jalucas@amaes.edu.ph");
		localStorage.setItem("address","McArthur Highway, Urdaneta City, Pangasinan");
		
		
		
		
		
		
		
	}
	if(instcode=='1130'){
		localStorage.setItem("current_hei","AIE College, Inc. - Calasiao");
		localStorage.setItem("institution_head","Dr. Aveleo Q. Fuentes");
		localStorage.setItem("institution_head_title","President/Chief Executive Officer");
		localStorage.setItem("telno","(075) 517-6560");
		localStorage.setItem("fax","(075) 515-8051");
		localStorage.setItem("email","aiecollege_registrar@yahoo.com ");
		localStorage.setItem("address","Poblacion East, Calasiao, Pangasinan");
	}
	if(instcode=='1101'){
		localStorage.setItem("current_hei","AMA Computer College - Dagupan City");
		localStorage.setItem("institution_head","Mr. Joellin Glenn G. Rocili");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(075) 515-7182, (075) 523-1420");
		localStorage.setItem("fax","(075) 515-7182");
		localStorage.setItem("email","jggrocili@amaes.edu.ph,amaccdagupancampus@gmail.com");
		localStorage.setItem("address","Mayombo District, Dagupan City, Pangasinan");
	}
	if(instcode=='1108'){
		localStorage.setItem("current_hei","AMA Computer College - La Union");
		localStorage.setItem("institution_head","Ms. Minnie Teresita M. Maribbay");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(072) 242-6418");
		localStorage.setItem("fax","(072) 242-6418");
		localStorage.setItem("email","mtmmaribbay@amaes.edu.ph");
		localStorage.setItem("address","General Luna Street, City of San Fernando  , La Union");
	}
	if(instcode=='1102'){
		localStorage.setItem("current_hei","AMA Computer College - Laoag City");
		localStorage.setItem("institution_head","Mrs. Imee Jessica G. Nicolas");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(077) 771-7489; 770-4609");
		localStorage.setItem("fax","(077) 771-7488");
		localStorage.setItem("email","ijgnicolas@amaes.edu.ph");
		localStorage.setItem("address","Don E. Ruiz Street, Laoag City (Capital), Ilocos Norte");
	}
	if(instcode=='1005'){
		localStorage.setItem("current_hei","Asbury College");
		localStorage.setItem("institution_head","Ms. Minnie Teresita M. Maribbay");
		localStorage.setItem("institution_head_title","Director");
		localStorage.setItem("telno","(075) 557-5052");
		localStorage.setItem("fax","(075) 557-5052");
		localStorage.setItem("email","asburycollege_anda@gmail.com, asburycollege.anda@gmail.com");
		localStorage.setItem("address","Luna Street, Anda, Pangasinan");
	}
	if(instcode=='1006'){
		localStorage.setItem("current_hei","Asiacareer College Foundation, Inc.");
		localStorage.setItem("institution_head","Mr. Florencio Z. Reyno Jr. ");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 515-7685");
		localStorage.setItem("fax","(075) 515-7686");
		localStorage.setItem("email","asiacareer@ymail.com");
		localStorage.setItem("address","Perez Blvd, Dagupan City, Pangasinan");
	}
	if(instcode=='1007'){
		localStorage.setItem("current_hei","Baccarra Medical Center School of Midwifery");
		localStorage.setItem("institution_head","Dr. Eduardo E. Padron, MD");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 670-3142; (077) 670-3150");
		localStorage.setItem("fax","(077) 670-3150");
		localStorage.setItem("email","bmc_1970@yahoo.com");
		localStorage.setItem("address","National Highway, Bacarra, Ilocos Norte");
	}
	if(instcode=='1145'){
		localStorage.setItem("current_hei","Binalatongan Community College");
		localStorage.setItem("institution_head","Hon. Julier C. Resuello");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 5292059");
		localStorage.setItem("fax","(075) 5292059");
		localStorage.setItem("email","bcc_sccp@yahoo.com");
		localStorage.setItem("address","Brgy. Ilang, San Carlos City, Pangasinan");
	}
	if(instcode=='1012'){
		localStorage.setItem("current_hei","CICOSAT College");
		localStorage.setItem("institution_head","Jacqueline Abella-Daciego, Ph. D.");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 607-1118");
		localStorage.setItem("fax","(072) 242-2698");
		localStorage.setItem("email","cicosatc@yahoo.com");
		localStorage.setItem("address","Lingsat, City of San Fernando  , La Union");
	}
	if(instcode=='1014'){
		localStorage.setItem("current_hei","Colegio de Dagupan");
		localStorage.setItem("institution_head","Dr. Voltaire P. Arzadon");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 522-2405");
		localStorage.setItem("fax","(075) 522-3629");
		localStorage.setItem("email","info@cdd.edu.ph, registrar@cdd.edu.ph");
		localStorage.setItem("address","Arellano Street, Dagupan City, Pangasinan");
	}
	if(instcode=='1113'){
		localStorage.setItem("current_hei","Colegio San Jose De Alaminos");
		localStorage.setItem("institution_head","Rev. Fr. Melchor Joseph C. Braga");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 551-4881; (075) 551-2979");
		localStorage.setItem("fax","(075) 551-2979");
		localStorage.setItem("email","csja01@yahoo.com, bubbly_craze@yahoo.com");
		localStorage.setItem("address","Quezon Avenue, Alaminos City, Pangasinan");
	}
	if(instcode=='1114'){
		localStorage.setItem("current_hei","Colegio San Juan de Letran - Manaoag");
		localStorage.setItem("institution_head","Fr. Napoleon B. Sipalay, OP");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 519-5033");
		localStorage.setItem("fax","(075) 529-0506");
		localStorage.setItem("email","letrancollegedean@gmail.com ");
		localStorage.setItem("address","Poblacion, Manaoag, Pangasinan");
	}
	if(instcode=='1016'){
		localStorage.setItem("current_hei","Dagupan Colleges Foundation");
		localStorage.setItem("institution_head","Domini P. Valdez");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 516-2554");
		localStorage.setItem("fax","(075) 516-2554");
		localStorage.setItem("email","dagupan_colleges@yahoo.com.ph ");
		localStorage.setItem("address","AB Fernandez East, Dagupan City, Pangasinan");
	}
	if(instcode=='1017'){
		localStorage.setItem("current_hei","Data Center College of the Philippines of Laoag City, Inc.");
		localStorage.setItem("institution_head","Mr. Joseph D. Sicco");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 770-3975, (077)770-3652");
		localStorage.setItem("fax","(077) 770-3652");
		localStorage.setItem("email","dccplaoag@yahoo.com");
		localStorage.setItem("address","A.G. Tupaz Cor. M.V. Fariñas Sts., Brgy. San Vicente, Laoag City (Capital), Ilocos Norte");
	}
	if(instcode=='1111'){
		localStorage.setItem("current_hei","Data Center College of the Philippines of Vigan City, Ilocos Sur, Inc.");
		localStorage.setItem("institution_head","LAURO A. RAPISURA");
		localStorage.setItem("institution_head_title","Administrator");
		localStorage.setItem("telno","(077) 674-2535");
		localStorage.setItem("fax","(077) 674-2535");
		localStorage.setItem("email","dccpvigan@yahoo.com, lquilenderino@yahoo.com");
		localStorage.setItem("address","Tamag, City of Vigan, Ilocos Sur");
	}
	if(instcode=='1018'){
		localStorage.setItem("current_hei","Divine Word College of Laoag");
		localStorage.setItem("institution_head","Rev. Fr. Reynaldo B. Jimenez, SVD");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 772-0736");
		localStorage.setItem("fax","(077) 772-1625");
		localStorage.setItem("email","dwclregistrar2k12@yahoo.com, rlbitancor@yahoo.com");
		localStorage.setItem("address","General Segundo Avenue, Barangay 12, Laoag City (Capital), Ilocos Norte");
	}
	if(instcode=='1019'){
		localStorage.setItem("current_hei","Divine Word College of Urdaneta");
		localStorage.setItem("institution_head","Rev. Fr. Gil T. Manalo, SVD");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 568-2588; (075) 568-2796; (075) 568-5966");
		localStorage.setItem("fax","(075) 568-2588");
		localStorage.setItem("email","dwcurd@yahoo.com");
		localStorage.setItem("address","J.P. Rizal Street, Bayaoas, Urdaneta City, Pangasinan");
	}
	if(instcode=='1020'){
		localStorage.setItem("current_hei","Divine Word College of Vigan");
		localStorage.setItem("institution_head","Rev. Fr. Cirilo O. Ortega, SVD");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 722-2033; (077) 722 -2034");
		localStorage.setItem("fax","(077) 722-1821");
		localStorage.setItem("email","officialdwcvregistrar@yahoo.com, dwcvdaa@gmail.com");
		localStorage.setItem("address","Burgos Street, City of Vigan, Ilocos Sur");
	}
	if(instcode=='1109'){
		localStorage.setItem("current_hei","Golden West Colleges");
		localStorage.setItem("institution_head","Ms. Domini P. Valdez");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 552-7382");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","gwc_registrar@yahoo.com, gwc_09@yahoo.com");
		localStorage.setItem("address","San Jose Drive, Alaminos City, Pangasinan");
	}
	if(instcode=='1032'){
		localStorage.setItem("current_hei","Ilocos Sur Community College");
		localStorage.setItem("institution_head","Dr. Carmencita Reyes Paz");
		localStorage.setItem("institution_head_title","College Administrator");
		localStorage.setItem("telno","(077) 722-5870");
		localStorage.setItem("fax","(077) 722-5870");
		localStorage.setItem("email","iscc_vigan@yahoo.com, menchiedreyes@yahoo.com");
		localStorage.setItem("address","Quirino Stadium, Bantay, Ilocos Sur");
	}
	if(instcode=='1141'){
		localStorage.setItem("current_hei","Immaculate Conception School of Technology");
		localStorage.setItem("institution_head","Rev. Fr. Lain M. Mayo");
		localStorage.setItem("institution_head_title","Rector/Dean of Studies");
		localStorage.setItem("telno","(077) 722-2359; (077) 632-0478");
		localStorage.setItem("fax","(077) 722-1119");
		localStorage.setItem("email","icstvigan1953@yahoo.com");
		localStorage.setItem("address","Pantay Daya, Vigan City, Ilocos Sur");
	}
	if(instcode=='1132'){
		localStorage.setItem("current_hei","International College of Excellence, Inc.");
		localStorage.setItem("institution_head","Engr. Danilo B. Lim");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 568-7660");
		localStorage.setItem("fax","(075) 568-7660");
		localStorage.setItem("email","ice2003.urdaneta@gmail.com");
		localStorage.setItem("address","40 Calle Garcia, Poblacion, Urdaneta City, Pangasinan");
	}
	if(instcode=='1128'){
		localStorage.setItem("current_hei","Kingfisher School of Business and Finance");
		localStorage.setItem("institution_head","Mr. Augustues P. Lambino");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 515-4697");
		localStorage.setItem("fax","(075) 515-4698");
		localStorage.setItem("email","kingfisherschool@yahoo.com.ph");
		localStorage.setItem("address","1131 Mac Arthur Highway, Lucao District, Dagupan City, Pangasinan");
	}
	if(instcode=='1124'){
		localStorage.setItem("current_hei","La Finn's Scholastica");
		localStorage.setItem("institution_head","Dr. Zenaida C. Finn");
		localStorage.setItem("institution_head_title","Chairperson/President, Board of Trustees");
		localStorage.setItem("telno","(072) 888-0858; (072) 888-5016");
		localStorage.setItem("fax","(072) 888-5199");
		localStorage.setItem("email","lucnas2003@yahoo.com");
		localStorage.setItem("address","181 Purok 3 Biday, City of San Fernando  , La Union");
	}
	if(instcode=='1140'){
		localStorage.setItem("current_hei","La Union Christian Comprehensive College");
		localStorage.setItem("institution_head","Ms. Micheline B. Rabara");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 712-0131");
		localStorage.setItem("fax","(072) 712-0140");
		localStorage.setItem("email","luccc2007@yahoo.com");
		localStorage.setItem("address","Benteng, Rosario, La Union");
	}
	if(instcode=='1116'){
		localStorage.setItem("current_hei","La Union College of Science and Technology");
		localStorage.setItem("institution_head","Engr. Arturo C. Quinto");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 705-3629");
		localStorage.setItem("fax","(072) 705-0335");
		localStorage.setItem("email","alucst@yahoo.com.ph");
		localStorage.setItem("address","Pezcadorez Street, Bauang, La Union");
	}
	if(instcode=='1034'){
		localStorage.setItem("current_hei","Lorma Colleges");
		localStorage.setItem("institution_head","Dr. Jose P. Mainggang");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(072) 700-2500; (072) 888-4341");
		localStorage.setItem("fax","(072) 888-4341");
		localStorage.setItem("email","joema@lorma.edu.ph, joema@lorma.edu");
		localStorage.setItem("address","Carlatan, City of San Fernando  , La Union");
	}
	if(instcode=='1035'){
		localStorage.setItem("current_hei","Luna Colleges");
		localStorage.setItem("institution_head","Ms. Maria Lourdes Mamenta-Ramos");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 572-3176");
		localStorage.setItem("fax","(075) 572-3176");
		localStorage.setItem("email","luna_colleges1934@yahoo.com, mlmamenta.lci@gmail.com");
		localStorage.setItem("address","Lopez-Jaena Street, Tayug, Pangasinan");
	}
	if(instcode=='1117'){
		localStorage.setItem("current_hei","Luzon College of Science and Technology (Urdaneta), Inc.");
		localStorage.setItem("institution_head","Mr. Bernardo P. Del Campo");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 568-3474");
		localStorage.setItem("fax","(075) 568-3474");
		localStorage.setItem("email","lcst_urda@yahoo.com");
		localStorage.setItem("address","Mc Arthur Highway, Nancayasan, Urdaneta City, Pangasinan");
	}
	if(instcode=='1037'){
		localStorage.setItem("current_hei","Lyceum Northern Luzon");
		localStorage.setItem("institution_head","Dr. Mariano M. Gandia");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 568-7963");
		localStorage.setItem("fax","(075) 568-7966");
		localStorage.setItem("email","lyceumnorthernluzon_inc@yahoo.com.ph ");
		localStorage.setItem("address","Mc Arthur Hi-way, San Vicente Central, Urdaneta City, Pangasinan");
	}
	if(instcode=='1103'){
		localStorage.setItem("current_hei","Lyceum Northwestern University");
		localStorage.setItem("institution_head","Dr. Francisco T. Duque III, MSC, DSC (HC)");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 515-8682; (075) 516-2434"); 
		localStorage.setItem("fax","(075) 516-2433");
		localStorage.setItem("email","lnu@registrar.edu.ph");
		localStorage.setItem("address","Tapuac District, Dagupan City, Pangasinan");
	}
	if(instcode=='1110'){
		localStorage.setItem("current_hei","Lyceum Northwestern University - Urdaneta City Campus");
		localStorage.setItem("institution_head","Dr. Francisco T. Duque III, MSC, DSC (HC)");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 568-7342; (075) 560-2372");
		localStorage.setItem("fax","(075) 568-7342");
		localStorage.setItem("email","mgzuluetasoni@yahoo.com ");
		localStorage.setItem("address","Nancayasan, Urdaneta City, Pangasinan");
	}
	if(instcode=='1104'){
		localStorage.setItem("current_hei","Macro Colleges, Inc.");
		localStorage.setItem("institution_head","Dr. Cirilo A. Parra");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 722-2097");
		localStorage.setItem("fax","(077) 722-2097");
		localStorage.setItem("email","macrocollegesinc@yahoo.com, macrocolleges_nscc@yahoo.com");
		localStorage.setItem("address","Rizal Street, City of Vigan, Ilocos Sur");
	}
	if(instcode=='1003'){
		localStorage.setItem("current_hei","Malasiqui Agno Valley College");
		localStorage.setItem("institution_head","Mr. Jevie P. de Guzman");
		localStorage.setItem("institution_head_title","School President");
		localStorage.setItem("telno","(075) 536-5372");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","mavc1936@yahoo.com");
		localStorage.setItem("address","Bonifacio Street, Malasiqui, Pangasinan");
		
		
		
		
		
		
		
	}
	if(instcode=='1041'){
		localStorage.setItem("current_hei","Mary Help of Christians College Seminary");
		localStorage.setItem("institution_head","Rev. Fr. Mario Dominic C. Sanchez");
		localStorage.setItem("institution_head_title","Rector");
		localStorage.setItem("telno","(075) 515-5720");
		localStorage.setItem("fax","(075) 515-5720");
		localStorage.setItem("email","aldmhcts@gmail.com ");
		localStorage.setItem("address","Bonuan Gueset, Dagupan City, Pangasinan");
	}
	if(instcode=='1146'){
		localStorage.setItem("current_hei","Mary Help Christians Theology Seminary");
		localStorage.setItem("institution_head","MSGR. OLIVER E. MENDOZA");
		localStorage.setItem("institution_head_title","Rector");
		localStorage.setItem("telno","075-6960236 ");
		localStorage.setItem("fax","075 696 0236");
		localStorage.setItem("email","aldmhcts@gmail.com");
		localStorage.setItem("address","Palapad, San Fabian, Pangasinan");
	}
	if(instcode=='1098'){
		localStorage.setItem("current_hei","Metro-Dagupan Colleges");
		localStorage.setItem("institution_head","Ms. Mae T. De los Reyes, MA");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 522-6367");
		localStorage.setItem("fax","(075) 522-6367");
		localStorage.setItem("email","romae_mdc@yahoo.com");
		localStorage.setItem("address","Serafica Street, Mangaldan, Pangasinan");
	}
	if(instcode=='1119'){
		localStorage.setItem("current_hei","Mystical Rose College of Science and Technology");
		localStorage.setItem("institution_head","Dr. Antonia B. Valmonte");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 546-4579");
		localStorage.setItem("fax","(075) 546-3297");
		localStorage.setItem("email","mrcst@ymail.com");
		localStorage.setItem("address","Pogonlomboy, Mangatarem, Pangasinan");
	}
	if(instcode=='1129'){
		localStorage.setItem("current_hei","NICOSAT Colleges");
		localStorage.setItem("institution_head","Dr. Jocelyn Abella-Galang");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 742-8413");
		localStorage.setItem("fax","(077) 742-8414");
		localStorage.setItem("email","nicosat@yahoo.com, northernilocandia@yahoo.com.ph");
		localStorage.setItem("address","Oaig Daya, City of Candon, Ilocos Sur");
	}
	if(instcode=='1083'){
		localStorage.setItem("current_hei","NJ Valdez Colleges Foundation");
		localStorage.setItem("institution_head","Ms. Domini P. Valdez");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 564-5054");
		localStorage.setItem("fax","(075) 564-3061");
		localStorage.setItem("email","nj_valdezcollege@yahoo.com");
		localStorage.setItem("address","Bacag, Villasis, Pangasinan");
	}
	if(instcode=='1048'){
		localStorage.setItem("current_hei","Northern Christian College");
		localStorage.setItem("institution_head","Dr. Caesar I. Agnir");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 772-0052; (077) 772-1864");
		localStorage.setItem("fax","(077) 772-1864");
		localStorage.setItem("email","cia.77m633@gmail.com");
		localStorage.setItem("address","Mabini Street, Laoag City (Capital), Ilocos Norte");
	}
	if(instcode=='1050'){
		localStorage.setItem("current_hei","Northern Luzon Adventist College");
		localStorage.setItem("institution_head","Pastor Nepthali J. Mañez");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 567-2627");
		localStorage.setItem("fax","(075) 567-2627");
		localStorage.setItem("email","esterpoli20@yahoo.com");
		localStorage.setItem("address","Artacho, Sison, Pangasinan");
	}
	if(instcode=='1051'){
		localStorage.setItem("current_hei","Northern Philippines College for Maritime, Science and Technology");
		localStorage.setItem("institution_head","Mr. Feban M. Quinto");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 242-5676 (077) 607-3167");
		localStorage.setItem("fax","(072) 242-5676");
		localStorage.setItem("email","npcmst_sfc@yahoo.com, reg_npcmst@yahoo.com");
		localStorage.setItem("address","National Highway, Lingsat, City of San Fernando  , La Union");
	}
	if(instcode=='1052'){
		localStorage.setItem("current_hei","Northwestern University");
		localStorage.setItem("institution_head","Atty. Ferdinand S. Nicolas");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 670-8609, 670-8610");
		localStorage.setItem("fax","(077) 771-3814");
		localStorage.setItem("email","eddivinaallodo@gmail.com, registrar_nwulaoag@yahoo.com");
		localStorage.setItem("address","Don Mariano Marcos Avenue, Laoag City (Capital), Ilocos Norte");
	}
	if(instcode=='1053'){
		localStorage.setItem("current_hei","Osias Educational Foundation");
		localStorage.setItem("institution_head","Dr. Danilo A. Concepcion");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 607-0142");
		localStorage.setItem("fax","(072) 607-0142");
		localStorage.setItem("email","oefbalaoan47@yahoo.com");
		localStorage.setItem("address","Brgy. Dr. Camilo Osias, Balaoan, La Union");
	}
	if(instcode=='1054'){
		localStorage.setItem("current_hei","Palaris College");
		localStorage.setItem("institution_head","Atty. Fe Lioaoa S. Baun");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 532-3847");
		localStorage.setItem("fax","(075) 532-3847");
		localStorage.setItem("email","palariscolleges@yahoo.com.ph, palariscollleges1946@gmail.com");
		localStorage.setItem("address","01 Perez Boulevard , San Carlos City, Pangasinan");
	}
	if(instcode=='1057'){
		localStorage.setItem("current_hei","Pangasinan Merchant Marine Academy");
		localStorage.setItem("institution_head","Ms. Michelle B. dela Cruz-Rosales");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 515-3331");
		localStorage.setItem("fax","(075) 515-7870; (075) 515-3331");
		localStorage.setItem("email","pammaregistrar@yahoo.com");
		localStorage.setItem("address","Perez Boulevard, Dagupan City, Pangasinan");
	}
	if(instcode=='1127'){
		localStorage.setItem("current_hei","Panpacific University North Philippines - Tayug");
		localStorage.setItem("institution_head","Dr. Donna Padilla - Taguiba");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 572-2934");
		localStorage.setItem("fax","(075) 572-2935");
		localStorage.setItem("email","info@punptayug.edu.ph");
		localStorage.setItem("address","Lopez Jaena Street, Tayug, Pangasinan");
	}
	if(instcode=='1055'){
		localStorage.setItem("current_hei","Panpacific University North Philippines - Urdaneta City");
		localStorage.setItem("institution_head","Dr. Rhonda T. Padilla");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 568-2672");
		localStorage.setItem("fax","(075) 568-7662");
		localStorage.setItem("email","punp.secretariat@gmail.com, punp.registrar@gmail.com");
		localStorage.setItem("address","McArthur Highway, San Vicente, Urdaneta City, Pangasinan");
	}
	if(instcode=='1100'){
		localStorage.setItem("current_hei","PASS College");
		localStorage.setItem("institution_head","Mr. Christian Reubens M. Morante / Diosdado B. Santiago Jr.");
		localStorage.setItem("institution_head_title","College President / OIC- College Director");
		localStorage.setItem("telno","(075) 551-3364; (075) 654-0001; (075) 654-1020");
		localStorage.setItem("fax","(075) 654-0001");
		localStorage.setItem("email","pass.college.director@gmail.com , registrarpasscollege@gmail.com");
		localStorage.setItem("address","Quezon Avenue, Alaminos City, Pangasinan");
	}
	if(instcode=='1059'){
		localStorage.setItem("current_hei","Perpetual Help College of Pangasinan");
		localStorage.setItem("institution_head","Dr. Rowel A. Crisostomo, CSEE");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(075) 536-4955");
		localStorage.setItem("fax","(075) 536-4955");
		localStorage.setItem("email","perpetualpangasinan@yahoo.com");
		localStorage.setItem("address","Montemayor Street, Malasiqui, Pangasinan");
	}
	if(instcode=='1133'){
		localStorage.setItem("current_hei","Philippine College of Northwestern Luzon");
		localStorage.setItem("institution_head","Dr. Vicente D. Ching");
		localStorage.setItem("institution_head_title","VP - Academic Affairs");
		localStorage.setItem("telno","(072) 710-1893");
		localStorage.setItem("fax","(072) 710-0290");
		localStorage.setItem("email","vicentedulayching@yahoo.co.uk");
		localStorage.setItem("address","Doña Toribia Aspiras Road, San Antonio, Agoo, La Union");
	}
	if(instcode=='1061'){
		localStorage.setItem("current_hei","Philippine College of Science and Technology");
		localStorage.setItem("institution_head","Dr. Lourdes S. Fernandez");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 522-8032");
		localStorage.setItem("fax","(075) 523-0894");
		localStorage.setItem("email","philcstreg@yahoo.com");
		localStorage.setItem("address","Nalsian, Calasiao, Pangasinan");
	}
	if(instcode=='1134'){
		localStorage.setItem("current_hei","Philippine Darakbang Theological College");
		localStorage.setItem("institution_head","Dr. Rosalia D. Guadaña");
		localStorage.setItem("institution_head_title","College President & Dean");
		localStorage.setItem("telno","(075) 562-5289");
		localStorage.setItem("fax","(075) 562-5290");
		localStorage.setItem("email","darakbang.college@yahoo.com");
		localStorage.setItem("address","Sto. Nino, Binalonan, Pangasinan");
	}
	if(instcode=='1150'){
		localStorage.setItem("current_hei","PHINMA Upang Urdaneta");
		localStorage.setItem("institution_head","Ms. Lovella C. Sanares");
		localStorage.setItem("institution_head_title","Asst. Chief Operations Officer");
		localStorage.setItem("telno","N/A");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","upang_urdaneta@up.phinma.edu.ph");
		localStorage.setItem("address","Mc Arthur Hi-way, Nancayasan, Urdaneta City, Pangasinan");
	}
	if(instcode=='1062'){
		localStorage.setItem("current_hei","PIMSAT Colleges - Dagupan");
		localStorage.setItem("institution_head","Atty. Rebene C. Carrera");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 523-6667");
		localStorage.setItem("fax","(075) 522-1808");
		localStorage.setItem("email","pimsat_colleges@yahoo.com");
		localStorage.setItem("address","Mc Arthur Hi-way, Bolosan, Dagupan City, Pangasinan");
	}
	if(instcode=='1144'){
		localStorage.setItem("current_hei","PIMSAT Colleges - San Carlos City");
		localStorage.setItem("institution_head","Atty. Rebene C. Carrera");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 634-1789");
		localStorage.setItem("fax","(075) 634-1789");
		localStorage.setItem("email","pimsatcolleges2015@gmail.com");
		localStorage.setItem("address","Rizal Street, San Carlos City, Pangasinan");
	}
	if(instcode=='1060'){
		localStorage.setItem("current_hei","Polytechnic College of La Union");
		localStorage.setItem("institution_head","Dr. Rodolfo T. Panay");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 710-0242; 607-9512");
		localStorage.setItem("fax","(072) 521-0592");
		localStorage.setItem("email","pcluph@yahoo.com");
		localStorage.setItem("address","San Joaquin Sur, Agoo, La Union");
	}
	if(instcode=='1142'){
		localStorage.setItem("current_hei","Polytechnic Colleges of Region 1");
		localStorage.setItem("institution_head","Dr. Zenaida C. Finn");
		localStorage.setItem("institution_head_title","President and Chairman, Board of Trustees");
		localStorage.setItem("telno","(077) 732-5724");
		localStorage.setItem("fax","(072) 888-5199");
		localStorage.setItem("email","pcr1.narvacan@gmail.com");
		localStorage.setItem("address","San Jose, Narvacan, Ilocos Sur");
	}
	if(instcode=='1137'){
		localStorage.setItem("current_hei","Rosales-Wesleyan Bible College");
		localStorage.setItem("institution_head","Rev. Robin S. Wag-e");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 582-3540");
		localStorage.setItem("fax","(075) 582-2710");
		localStorage.setItem("email","rwbc2007@yahoo.com, adnilre7@yahoo.com");
		localStorage.setItem("address","Zamora St. San Pedro West, Rosales, Pangasinan");
	}
	if(instcode=='1173'){
		localStorage.setItem("current_hei","Saint Columban's College");
		localStorage.setItem("institution_head","Rev. Fr. Dexter Z. Cariño");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(075) 542-4864");
		localStorage.setItem("fax","(075) 542-4864");
		localStorage.setItem("email","st_columbanscg@yahoo.com");
		localStorage.setItem("address","Poblacion, Lingayen, Pangasinan");
	}
	if(instcode=='1135'){
		localStorage.setItem("current_hei","Saint John Bosco College of Northern Luzon");
		localStorage.setItem("institution_head","Ms. Brenda P. Gandeza");
		localStorage.setItem("institution_head_title","Administrator");
		localStorage.setItem("telno","(072) 700-0164; (072) 607-5373; (072) 700-1376");
		localStorage.setItem("fax","(072) 700-0164");
		localStorage.setItem("email","saintjohnbosco_registrar@yahoo.com");
		localStorage.setItem("address","Lingsat, City of San Fernando  , La Union");
	}
	if(instcode=='1074'){
		localStorage.setItem("current_hei","Sain Louis College of San Fernando, La Union, Inc.");
		localStorage.setItem("institution_head","Rev. Fr. Gilbert B. Sales, CICM");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 242-5535; (072) 242-5536");
		localStorage.setItem("fax","(072) 888-3955");
		localStorage.setItem("email","slc_president@yahoo.com, slc_admin@slc-sflu.edu.ph");
		localStorage.setItem("address","National Highway, Lingsat, City of San Fernando  , La Union");
	}
	if(instcode=='1121'){
		localStorage.setItem("current_hei","Saint Therese College Foundation");
		localStorage.setItem("institution_head","Dr. Armand F. Magleo, SLD");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 955-5370; (075) 955-5539");
		localStorage.setItem("fax","(075) 955-5000");
		localStorage.setItem("email","teresyanoako@yahoo.com ");
		localStorage.setItem("address","M. Soriano, San Carlos City, Pangasinan");
	}
	if(instcode=='1077'){
		localStorage.setItem("current_hei","San Carlos College");
		localStorage.setItem("institution_head","Dr. Elsa Ma. V. Unson");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 955-5190; 634-1094; 09198048673");
		localStorage.setItem("fax","(075) 955-5190");
		localStorage.setItem("email","registrar_sancarloscollege@yahoo.com");
		localStorage.setItem("address","Mabini Street, San Carlos City, Pangasinan");
	}
	if(instcode=='1078'){
		localStorage.setItem("current_hei","Sea and Sky College");
		localStorage.setItem("institution_head","Mr. Daniel T. Bolong, Jr.");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 607-4224; (072) 700-2702");
		localStorage.setItem("fax","(072) 607-4224; (072) 607-5582");
		localStorage.setItem("email","seaskycollege@yahoo.com");
		localStorage.setItem("address","Greenhills Subdivision, Pagdaraoan, City of San Fernando  , La Union");
	}
	if(instcode=='1149'){
		localStorage.setItem("current_hei","Señor Teroso College");
		localStorage.setItem("institution_head","EDITHA T. CARDOZO");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","075 522 49 28; 075 522 8575; 075 522 4928");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","senortesoro_college@yahoo.com.ph");
		localStorage.setItem("address","San Miguel, Diversion Road, Calasiao, Pangasinan");
	}
	if(instcode=='1115'){
		localStorage.setItem("current_hei","South Ilocandia College of Arts and Technology");
		localStorage.setItem("institution_head","Mr. John Y. Chan");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 714-0213; (072) 607-9408");
		localStorage.setItem("fax","(072) 521-0101");
		localStorage.setItem("email","sicatcollege2000@yahoo.com");
		localStorage.setItem("address","San Eugenio, Aringay, La Union");
	}
	if(instcode=='1131'){
		localStorage.setItem("current_hei","St. Camillus College of Manaoag Foundation, Inc.");
		localStorage.setItem("institution_head","Prof. Isabel R. Mendoza");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 529-1246; (075) 519-5200");
		localStorage.setItem("fax","(075) 529-1246");
		localStorage.setItem("email","st.camilluscollegefoundation@gmail.com");
		localStorage.setItem("address","Barangay Licsi, Manaoag, Pangasinan");
	}
	if(instcode=='1075'){
		localStorage.setItem("current_hei","St. Mary's College Sta. Maria, Ilocos Sur, Inc.");
		localStorage.setItem("institution_head","MS. LEONIDA D. SISON, MAEd ");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 732-5629");
		localStorage.setItem("fax","(077) 732-5558");
		localStorage.setItem("email","smcian_2005@yahoo.com.ph");
		localStorage.setItem("address","Poblacion Sur, Sta. Maria, Ilocos Sur");
	}
	if(instcode=='1076'){
		localStorage.setItem("current_hei","St. Paul College of Ilocos Sur");
		localStorage.setItem("institution_head","Sr. Carolina Agravante, SPC");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 674-2457");
		localStorage.setItem("fax","(077) 674-2457");
		localStorage.setItem("email","Spcilocossur@yahoo.com");
		localStorage.setItem("address","Bayubay, San Vicente, Ilocos Sur");
	}
	if(instcode=='1105'){
		localStorage.setItem("current_hei","Sta. Veronica College");
		localStorage.setItem("institution_head","Ms. Ging-Ging R. Rodriguez");
		localStorage.setItem("institution_head_title","School Director");
		localStorage.setItem("telno","(072) 607-0906; 720-2604, 607-0963");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","cljrodriguez@amaes.edu.ph");
		localStorage.setItem("address","National Highway, Baroro, Bacnotan, La Union");
	}
	if(instcode=='1107'){
		localStorage.setItem("current_hei","STI Dagupan, Inc.");
		localStorage.setItem("institution_head","Mr. Russel Anthony C. Beligan");
		localStorage.setItem("institution_head_title","Deputy School Administrator");
		localStorage.setItem("telno","(075) 653-3668");
		localStorage.setItem("fax","(075) 522-2557");
		localStorage.setItem("email","sti.dagupan@gmail.com, mars_sti_dag@yahoo.com");
		localStorage.setItem("address","Arellano St., Dagupan City, Pangasinan");
	}
	if(instcode=='1148'){
		localStorage.setItem("current_hei","STI Education Services Group Inc.");
		localStorage.setItem("institution_head","Evangeline V. Salaguban");
		localStorage.setItem("institution_head_title","Administrator");
		localStorage.setItem("telno","(077) 770 5179 / (077) 771 4613");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","evangeline.salaguban@laoag.sti.edu.ph");
		localStorage.setItem("address","J.P. Rizal St. corner Don E. Ruiz St., Laoag City, Ilocos Norte");
	}
	if(instcode=='1147'){
		localStorage.setItem("current_hei","STI Vigan Incorporated");
		localStorage.setItem("institution_head","MELVIN JEFFREY M. DELA CRUZ / LEILA ISAGUIRRE-MALAMUG");
		localStorage.setItem("institution_head_title","President / Administrator");
		localStorage.setItem("telno","(077) 722-8698");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","admin@vigan.sti.edu");
		localStorage.setItem("address","Burgos Pantay Daya, Vigan City, Ilocos Sur");
	}
	if(instcode=='1106'){
		localStorage.setItem("current_hei","Systems Technology Institute (STI) College - San Fernando City, Inc.");
		localStorage.setItem("institution_head","Engr. Antonio R. Alvarado, Jr.");
		localStorage.setItem("institution_head_title","Administrator");
		localStorage.setItem("telno","(072) 242-5733; (072) 700-3145");
		localStorage.setItem("fax","(072) 242-5733");
		localStorage.setItem("email","stisanfernandolaunion@yahoo.com");
		localStorage.setItem("address","STI Building, Aguila Road, Sevilla Norte, City of San Fernando  , La Union");
	}
	if(instcode=='1002'){
		localStorage.setItem("current_hei","The Adelphi College");
		localStorage.setItem("institution_head","Atty. Jose L. Lopez Jr.");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 542-4543");
		localStorage.setItem("fax","(075) 542-4544");
		localStorage.setItem("email","adelphi_college1945@yahoo.com");
		localStorage.setItem("address","New Street East, Lingayen, Pangasinan");
	}
	if(instcode=='1029'){
		localStorage.setItem("current_hei","The Great Pleberian College");
		localStorage.setItem("institution_head","Ms. Lourdes B. Garcia");
		localStorage.setItem("institution_head_title","School President");
		localStorage.setItem("telno","(075) 552 7250");
		localStorage.setItem("fax","(075) 634-0195");
		localStorage.setItem("email","gpcalaminoscity@yahoo.com.ph");
		localStorage.setItem("address","Don P. Reinoso, Alaminos City, Pangasinan");
	}
	if(instcode=='1079'){
		localStorage.setItem("current_hei","Union Christian College");
		localStorage.setItem("institution_head","Dr. Myrna L. Carreon");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(072) 888-3340; (072) 700-0282");
		localStorage.setItem("fax","(072) 888-3340");
		localStorage.setItem("email","unionchristiancollege@gmail.com");
		localStorage.setItem("address","Barangay 2, Widdoes Street, City of San Fernando  , La Union");
	}
	if(instcode=='1136'){
		localStorage.setItem("current_hei","University of Eastern Pangasinan");
		localStorage.setItem("institution_head","Dr. Ramon V. Guico III");
		localStorage.setItem("institution_head_title","University President");
		localStorage.setItem("telno","(075) 562-5338");
		localStorage.setItem("fax","(075) 562-5338");
		localStorage.setItem("email","registrar_uep@yahoo.com.ph");
		localStorage.setItem("address","Poblacion, Binalonan, Pangasinan");
	}
	if(instcode=='1036'){
		localStorage.setItem("current_hei","University of Luzon");
		localStorage.setItem("institution_head","Dr. Mac Arthur M. Samson");
		localStorage.setItem("institution_head_title","University President");
		localStorage.setItem("telno","(075) 515-7707; (075) 515-8177");
		localStorage.setItem("fax","(075) 515-5767");
		localStorage.setItem("email","ul.registrar@yahoo.com");
		localStorage.setItem("address","Perez Boulvard, Dagupan City, Pangasinan");
	}
	if(instcode=='1081'){
		localStorage.setItem("current_hei","University of Pangasinan");
		localStorage.setItem("institution_head","Dr. Meliton B. Salazar");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 522-5635 to 37");
		localStorage.setItem("fax","(075) 522-2496 ");
		localStorage.setItem("email","lmsoriano@up.phinma.edu.ph");
		localStorage.setItem("address","Arellano Street, Dagupan City, Pangasinan");
	}
	if(instcode=='1084'){
		localStorage.setItem("current_hei","Urdaneta City University");
		localStorage.setItem("institution_head","Dr. Elizabeth A. Montero");
		localStorage.setItem("institution_head_title","University President");
		localStorage.setItem("telno","(075) 568-7612");
		localStorage.setItem("fax","(075) 568-7612");
		localStorage.setItem("email","ucu.main@gmail.com");
		localStorage.setItem("address","San Vicente West, Urdaneta City, Pangasinan");
	}
	if(instcode=='1086'){
		localStorage.setItem("current_hei","Virgen Milagrosa University Foundation");
		localStorage.setItem("institution_head","Dr. Ma. Lilia P. Juan, M.D., FPCHA");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 531-2222; (075) 634-111; (075) 955-2222");
		localStorage.setItem("fax","(075) 634-2692; (075) 955-5707");
		localStorage.setItem("email","vmuf1958@gmail.com");
		localStorage.setItem("address","Martin P. Posadas Avenue, San Carlos City, Pangasinan");
	}
	if(instcode=='1143'){
		localStorage.setItem("current_hei","WCC aeronautical & Technological College, Inc.");
		localStorage.setItem("institution_head","Dr. Ramon V. Guico III");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(075) 562-6007");
		localStorage.setItem("fax","(075) 562-6007");
		localStorage.setItem("email","w.estano@wccaviation.com");
		localStorage.setItem("address","Brgy. Sta. Maria Norte, Binalonan, Pangasinan");
	}
	if(instcode=='1023'){
		localStorage.setItem("current_hei","Don Mariano Marcos Memorial State University - Mid La Union");
		localStorage.setItem("institution_head","Dr. Paulito C. Nisperos");
		localStorage.setItem("institution_head_title","Chancellor");
		localStorage.setItem("telno","(072) 242-3608; (072) 888-3191");
		localStorage.setItem("fax","(072) 242-3608");
		localStorage.setItem("email","dmmmsucamis@yahoo.com");
		localStorage.setItem("address","Catbangen, City of San Fernando  , La Union");
	}
	if(instcode=='1026'){
		localStorage.setItem("current_hei","Don Mariano Marcos Memorial State University - North La Union - Main Campus");
		localStorage.setItem("institution_head","Atty. Benjamin P. Sapitula / Dr. Jaime I. Manuel Jr.");
		localStorage.setItem("institution_head_title","President / Chancellor");
		localStorage.setItem("telno","(072) 242-1117");
		localStorage.setItem("fax","(072) 242-1117");
		localStorage.setItem("email","nluc_chancellor@dmmmsu.edu.ph");
		localStorage.setItem("address","Sapilang, Bacnotan, La Union");
	}
	if(instcode=='1023a'){
		localStorage.setItem("current_hei","Don Mariano Marcos Memorial State University - Open University");
		localStorage.setItem("institution_head","Dr. Ophelia Romana Luisa A. Cardenas");
		localStorage.setItem("institution_head_title","Director");
		localStorage.setItem("telno","(072) 242-3608; (072)8 88-2266");
		localStorage.setItem("fax","(072) 242-3608");
		localStorage.setItem("email","dmmmsuca_op@yahoo.com.ph");
		localStorage.setItem("address","Catbangen, City of San Fernando  , La Union");
	}
	if(instcode=='1021'){
		localStorage.setItem("current_hei","Don Mariano Marcos Memorial State University - South La Union");
		localStorage.setItem("institution_head","Dr. Floribeth P. Cuison");
		localStorage.setItem("institution_head_title","Chancellor");
		localStorage.setItem("telno","(072) 521-0020");
		localStorage.setItem("fax","(072) 521-0020; 521-0009; 710-7959");
		localStorage.setItem("email","dmmmsu.sluc@yahoo.com.ph");
		localStorage.setItem("address","Dona Toribia Aspiras Road, Agoo, La Union");
	}
	if(instcode=='1031'){
		localStorage.setItem("current_hei","Ilocos Sur Polytechnic State College - Main");
		localStorage.setItem("institution_head","Dr. Francisco D. Lopez");
		localStorage.setItem("institution_head_title","SUC President II");
		localStorage.setItem("telno","(077) 745-5512");
		localStorage.setItem("fax","(077) 732-5512 ");
		localStorage.setItem("email","ispsc_2705@yahoo.com");
		localStorage.setItem("address","National Highway, Sta. Maria, Ilocos Sur");
	}
	if(instcode=='1094'){
		localStorage.setItem("current_hei","Ilocos Sur Polytechnic State College - Candon");
		localStorage.setItem("institution_head","Dr. Pasty Panizares");
		localStorage.setItem("institution_head_title","Campus Director");
		localStorage.setItem("telno","(077) 742-5228");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","N/A");
		localStorage.setItem("address","Barangay Darapidap, City of Candon, Ilocos Sur");
	}
	if(instcode=='1091'){
		localStorage.setItem("current_hei","Ilocos Sur Polytechnic State College - Cervantes");
		localStorage.setItem("institution_head","Dr. Renato Sawey");
		localStorage.setItem("institution_head_title","Campus Director");
		localStorage.setItem("telno","(077)  732 55 12");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","ispsc2710@yahoo.com");
		localStorage.setItem("address","Cervantes, Ilocos Sur");
	}
	if(instcode=='1089'){
		localStorage.setItem("current_hei","Ilocos Sur Polytechnic State College - College of Arts and Sciences - Tagudin");
		localStorage.setItem("institution_head","Dr. Remedios Obille");
		localStorage.setItem("institution_head_title","Campus Director");
		localStorage.setItem("telno","(077) 748-7177");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","ispsctagudin@yahoo.com ");
		localStorage.setItem("address","Tagudin, Ilocos Sur");
	}
	if(instcode=='1088'){
		localStorage.setItem("current_hei","Ilocos Sur Polytechnic State College - College of Engineering and Technology - Santiago");
		localStorage.setItem("institution_head","Dr. Aurora Ayson");
		localStorage.setItem("institution_head_title","Campus Director");
		localStorage.setItem("telno","(077)  732 55 12");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","N/A");
		localStorage.setItem("address","Poblacion Norte, Santiago, Ilocos Sur");
	}
	if(instcode=='1090'){
		localStorage.setItem("current_hei","Ilocos Sur Polytechnic State - College of Fisheries and Marine Science - Narvacan");
		localStorage.setItem("institution_head","Dr. Denis Cabotage");
		localStorage.setItem("institution_head_title","Campus Director");
		localStorage.setItem("telno","(077)  732 55 12");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","ispscnarvacan@gmail.com");
		localStorage.setItem("address","Sulvec, Narvacan, Ilocos Sur");
	}
	if(instcode=='1044'){
		localStorage.setItem("current_hei","Mariano Marcos State University - College of Agriculture and Forestry - Dingras");
		localStorage.setItem("institution_head","Dr. Jocelyn A. Bernabe");
		localStorage.setItem("institution_head_title","Coordinator");
		localStorage.setItem("telno","(077) 784-7083");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","mmsuop@yahoo.com , vpaammsu@yahoo.com.ph");
		localStorage.setItem("address","Barangay Madamba, Dingras, Ilocos Norte");
	}
	if(instcode=='1043'){
		localStorage.setItem("current_hei","Mariano Marcos State University - College of Aquatic Science & Applied Technology - Currimao");
		localStorage.setItem("institution_head","Dr. Andres Y. Tungpalan");
		localStorage.setItem("institution_head_title","Dean");
		localStorage.setItem("telno","(077) 793-6916");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","mmsuop@yahoo.com , vpaammsu@yahoo.com.ph");
		localStorage.setItem("address","Pias Sur, Currimao, Ilocos Norte");
	}
	if(instcode=='1046'){
		localStorage.setItem("current_hei","Mariano Marcos State University - College of Industrial Technology - Laoag City");
		localStorage.setItem("institution_head","Dr. Cesario Y. Pacis");
		localStorage.setItem("institution_head_title","Dean");
		localStorage.setItem("telno","(077) 771-4241");
		localStorage.setItem("fax","(077) 771-4241");
		localStorage.setItem("email","mmsuop@yahoo.com , vpaammsu@yahoo.com.ph");
		localStorage.setItem("address","P. Gomez Street, Laoag City (Capital), Ilocos Norte");
	}
	if(instcode=='1045'){
		localStorage.setItem("current_hei","Mariano Marcos State University - College of Teacher Education - Laoag City");
		localStorage.setItem("institution_head","Dr. Eliza T. Samson");
		localStorage.setItem("institution_head_title","Dean");
		localStorage.setItem("telno","(077) 221-4143");
		localStorage.setItem("fax","(077) 771-4143");
		localStorage.setItem("email","mmsuop@yahoo.com , vpaammsu@yahoo.com.ph");
		localStorage.setItem("address","Castro Avenue, Laoag City (Capital), Ilocos Norte");
	}
	if(instcode=='1040'){
		localStorage.setItem("current_hei","Mariano Marcos State University - Main");
		localStorage.setItem("institution_head","Dr. Prima Fe R. Franco");
		localStorage.setItem("institution_head_title","OIC President");
		localStorage.setItem("telno","(077) 792-3191; (077) 792-3925 ");
		localStorage.setItem("fax","(077) 792-3191");
		localStorage.setItem("email","mmsuop@yahoo.com , vpaammsu@yahoo.com.ph");
		localStorage.setItem("address","Barangay 16, City of Batac, Ilocos Norte");
	}
	if(instcode=='1082'){
		localStorage.setItem("current_hei","North Luzon Philippine State College");
		localStorage.setItem("institution_head","Dr. Elizabeth M. Gacusana");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 742-6444");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","nlpsc_candon@yahoo.com");
		localStorage.setItem("address","San Nicolas, City of Candon, Ilocos Sur");
	}
	if(instcode=='1058'){
		localStorage.setItem("current_hei","Pangasinan State University - Main");
		localStorage.setItem("institution_head","Dr. Dexter R. Buted / Dr. Armando D. Junio");
		localStorage.setItem("institution_head_title","President / Executive Director");
		localStorage.setItem("telno","(072) 242-5676; (077) 888-3167; (075) 542-4261; (075) 542-4992");
		localStorage.setItem("fax","(075) 542-6466; (075) 542-8694");
		localStorage.setItem("email","president@psu.edu.ph");
		localStorage.setItem("address","Alvear Street, Lingayen, Pangasinan");
	}
	if(instcode=='1058'){
		localStorage.setItem("current_hei","Pangasinan State University - Alaminos City");
		localStorage.setItem("institution_head","Dr. Jessica J. Jimenez");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","N/A");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","psu.alaminos.campus@gmail.com");
		localStorage.setItem("address","Alaminos City, Pangasinan");
	}
	if(instcode=='1064'){
		localStorage.setItem("current_hei","Pangasinan State University - Asingan");
		localStorage.setItem("institution_head","Dr. Ruby Rosa V. Cruz");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 563-2525");
		localStorage.setItem("fax","(075) 563-2525");
		localStorage.setItem("email","asingancampus@psu.edu.ph");
		localStorage.setItem("address","Domanpot, Asingan, Pangasinan");
	}
	if(instcode=='1065'){
		localStorage.setItem("current_hei","Pangasinan State University - Bayambang");
		localStorage.setItem("institution_head","Dr. Cesar G. Della");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 592-2027");
		localStorage.setItem("fax","(075) 592-2207");
		localStorage.setItem("email","bayambangcampus@psu.edu.ph");
		localStorage.setItem("address","Quezon Boulevard, Bayambang, Pangasinan");
	}
	if(instcode=='1066'){
		localStorage.setItem("current_hei","Pangasinan State University - Binmaley");
		localStorage.setItem("institution_head","Dr. Marcelo C. Gutierrez, Jr.");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 543-3012");
		localStorage.setItem("fax","(075) 542-6466");
		localStorage.setItem("email","binmaleycampus@psu.edu.ph");
		localStorage.setItem("address","Barangay San Isidro Norte, Binmaley, Pangasinan");
	}
	if(instcode=='1067'){
		localStorage.setItem("current_hei","Pangasinan State University - Infanta");
		localStorage.setItem("institution_head","Dr. Naominida C. Olermo");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","N/A");
		localStorage.setItem("fax","N/A");
		localStorage.setItem("email","infantacampus@psu.edu.ph");
		localStorage.setItem("address","Bamban, Infanta, Pangasinan");
	}
	if(instcode=='1058a'){
		localStorage.setItem("current_hei","Pangasinan State University - Open University");
		localStorage.setItem("institution_head","Dr. Gemma M. De Vera");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 542-6464; (075) 542-6467");
		localStorage.setItem("fax","(075) 542-6466; (075) 542-8694");
		localStorage.setItem("email","president@psu.edu.ph");
		localStorage.setItem("address","Alvear Street, Lingayen, Pangasinan");
	}
	if(instcode=='1068'){
		localStorage.setItem("current_hei","Pangasinan State University - San Carlos City");
		localStorage.setItem("institution_head","Dr. Valentin B. Calpo, Jr.");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 532-2235");
		localStorage.setItem("fax","(075) 542-6467");
		localStorage.setItem("email","president@psu.edu.ph");
		localStorage.setItem("address","Roxas Boulevard, San Carlos City, Pangasinan");
	}
	if(instcode=='1069'){
		localStorage.setItem("current_hei","Pangasinan State College - Sta. Maria");
		localStorage.setItem("institution_head","Dr. Priscilla L. Agsalud");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 574-5159");
		localStorage.setItem("fax","(075) 574-5159");
		localStorage.setItem("email","president@psu.edu.ph");
		localStorage.setItem("address","Ciangao, Sta. Maria, Pangasinan");
	}
	if(instcode=='1070'){
		localStorage.setItem("current_hei","Pangasinan State University - Urdaneta City");
		localStorage.setItem("institution_head","Dr. Paulo V. Cenas");
		localStorage.setItem("institution_head_title","Executive Director");
		localStorage.setItem("telno","(075) 568-2040; (075) 568-2568");
		localStorage.setItem("fax","(075) 568-2556");
		localStorage.setItem("email","psu_ippro2007@yahoo.com.ph");
		localStorage.setItem("address","San Vicente, Urdaneta City, Pangasinan");
	}
	if(instcode=='1080'){
		localStorage.setItem("current_hei","University of Northern Philippines");
		localStorage.setItem("institution_head","Dr. Gilbert R. Arce");
		localStorage.setItem("institution_head_title","President");
		localStorage.setItem("telno","(077) 722-2810");
		localStorage.setItem("fax","(077) 722-2810");
		localStorage.setItem("email","unp_op@yahoo.com");
		localStorage.setItem("address","Quirino Boulevard, City of Vigan, Ilocos Sur");
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