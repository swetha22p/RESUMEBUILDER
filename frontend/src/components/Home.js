
import {useState} from 'react'
import Axios from 'axios'
import {useNavigate} from  'react-router-dom';

const Home=()=> {

  const [Name, setName] = useState()
  const [Mobile,setMobile] = useState()
  const [Email,setEmail] = useState()
  const [Github,setGithub] = useState()
  const [Linkedin,setLinkedin] = useState()
  const [Objective,setObjective] = useState()
  const [Education,setEducation] = useState()
  const [Projects,setProjects] = useState()
  const [TechnicalSkills,setTechnicalSkills] = useState()
  const [Strengths,setStrengths] = useState()
  const [Certifications,setCertifications] = useState()
  const [Hobbies,setHobbies] = useState()
  const [FatherName,setFatherName] = useState()
  const [DateOfBirth, setDateOfBirth] = useState()
  const [Nationality,setNationality] = useState()
  const [Religion,setReligion] = useState()
  const [Gender,setGender] = useState()
  const [Address,setAddress] = useState()
  const navigate=useNavigate()
  const addResume = () => {
    Axios.post('http://localhost:8080/add-resume',{Name,Mobile,Email,Github,Linkedin,Objective,Education,Projects,TechnicalSkills,Strengths,Certifications,Hobbies,FatherName,DateOfBirth,Nationality,Religion,Gender,Address})
   alert('data sent successfully')
   navigate('/result')
  }
  return (
   <>
   <>
   <h1> SCB  RESUME-BUILDER</h1> 
   </>
    <div className="container">
      <div className='items'>
      <label className='label' htmlFor="">Name: </label>
      <input className='input' type="text" required onChange={(e) => {setName(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Mobile: </label>
      <input className='input' type="number" required onChange={(e) => {setMobile(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Email: </label>
      <input  className='input' type="text" required onChange={(e) => {setEmail(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Github: </label>
      <input  className='input' type="text" required onChange={(e) => {setGithub(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Linkedin: </label>
      <input  className='input' type="text" required onChange={(e) => {setLinkedin(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Objective: </label>
      <input  className='input' type="text" required onChange={(e) => {setObjective(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Education: </label>
      <input  className='input' type="text" required onChange={(e) => {setEducation(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Projects: </label>
      <input  className='input' type="text" required onChange={(e) => {setProjects(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">TechnicalSkills: </label>
      <input  className='input' type="text" required onChange={(e) => {setTechnicalSkills(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Strengths: </label>
      <input  className='input' type="text" required onChange={(e) => {setStrengths(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Certifications: </label>
      <input  className='input' type="text" required onChange={(e) => {setCertifications(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Hobbies: </label>
      <input  className='input' type="text" required onChange={(e) => {setHobbies(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">FatherName: </label>
      <input  className='input' type="text" required onChange={(e) => {setFatherName(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">DateOfBirth: </label>
      <input  className='input' type="text" required onChange={(e) => {setDateOfBirth(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Nationality: </label>
      <input  className='input' type="text" required onChange={(e) => {setNationality(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Religion: </label>
      <input  className='input' type="text" required onChange={(e) => {setReligion(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Gender: </label>
      <input  className='input' type="text" required onChange={(e) => {setGender(e.target.value)}}/><br/><br/>
      <label className='label' htmlFor="">Address: </label>
      <input  className='input' type="text" required onChange={(e) => {setAddress(e.target.value)}}/><br/><br/>

      <button className='submit' onClick={addResume}>Submit</button>
      </div>
    </div>
    </>
  );
}

export default Home;
