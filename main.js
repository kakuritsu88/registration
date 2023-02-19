function message(){
    var Username = document.getElementsByName('Username');
    var Gender = document.getElementsByName('Gender');
    var Yourdesiredcharacter = document.getElementsByName('Your desired character');
    var Alternativecharacter = document.getElementsByName('Alternative character');
    var Pleaseratehowactiveyouare = document.getElementsByName('Please rate how active you are');
    var Ifyouplacedfirstandmanagetobeatotherplayersingamblingwhatwillyoudotoourschool = document.getElementsByName('If you placed first and manage to beat other players in gambling, what will you do to our school?');
    const success = document.getElementsByName('success');
    const danger = document.getElementsByName('danger');

    if(Username.value === '' || Gender.value === '' || Yourdesiredcharacter.value === '' || Alternativecharacter.value === '' || Pleaseratehowactiveyouare.value === '' || Ifyouplacedfirstandmanagetobeatotherplayersingamblinghat will you do to our school.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Username.value = '';
            Gender.value = '';
            Yourdesiredcharacter.value = '';
            Alternativecharacter.value = '';
            Pleaseratehowactiveyouare.value = '';
            Ifyouplacedfirstandmanagetobeatotherplayersingambling.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}