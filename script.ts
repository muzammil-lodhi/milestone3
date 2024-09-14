//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

    ///type arrested
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const expereinceElement = document.getElementById('expereince') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;


    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && expereinceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const expereince = expereinceElement.value;
        const skills = skillsElement.value;


    //picture elements
    const profilePicturefile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile):'';
     




    //create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL} alt="profile picture" class="profilePicture">`:""}

    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone:</strong>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Expereince</h3>
    <p>${expereince}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `

    const resumeOutputElement= document.getElementById('resumeOutput')
    if(resumeOutputElement){
        resumeOutputElement.innerHTML=resumeOutput
    }else{
        console.error('the resume output elements are missing');
        
    }
}
else{
    console.error('one or more output elements are missing')
}
})