import React from 'react';
import axios from 'axios';
import {FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap, FaSadCry} from 'react-icons/fa';
import './contact.css';
import { useState,useEffect } from 'react';
import shapeOne from "../../assets/shape-2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    useEffect(()=>{
        AOS.init({duration:1000});
    },[]);

    const [form, setForm]=useState({
        name:'',
        email:'',
        subject:'',
        message:'',
    });

    const [noSubmit, noSubmitHandler]=useState(false);
    

    const handleChange =(e) =>{
        noSubmitHandler(false);
        const name = e.target.name;
        const value =e.target.value;
        setForm({...form,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            noSubmitHandler(true);
            return;
        }
        else{
            noSubmitHandler(false);
        }

        axios.post(
            'https://sheet.best/api/sheets/123d089f-1209-4846-84f7-971740c002ac',
            form
        ).then((response)=>{
            // // console.log(response);
            // setForm({
            //     name:'',
            //     email:'',
            //     subject:'',
            //     message:''})
        });

        const formData = new FormData(e.target);
        axios.post('https://octopus-app-mdxtz.ondigitalocean.app/submit-form', {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        })
        .then(response => {
            setForm({
                name:'',
                email:'',
                subject:'',
                message:''});
                toast.success('Message Sent. Will Get back to you soon!',{
                    duration: 5000
                });
        })
        .catch(error => {
            console.error(error);
        });
    }



  return (
    <div><Toaster/>
    <section className="contact section" id="contact">
        <h2 className="section__title text-cs">Contact Me</h2>
        <p className="section__subtitle">
            Let's <span>Talk About Ideas</span>
        </p>

        <div className="contact__container container grid">
            <div className="contact__content" >
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegMap />
                    </span>

                    <h3 className="contact__card-title">Address</h3>
                    <p className="contact__card-data">Kolkata, West Bengal(IN)</p>
                </div>
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegUser />
                    </span>

                    <h3 className="contact__card-title">Student</h3>
                    <p className="contact__card-data">LPU, Phagwara, Punjab(IN)</p>
                </div>
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegEnvelope />
                    </span>

                    <h3 className="contact__card-title">E-Mail</h3>
                    <p className="contact__card-data">bibekkundu0510@gmail.com</p>
                </div>
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegAddressBook />
                    </span>

                    <h3 className="contact__card-title">Phone</h3>
                    <p className="contact__card-data">+91 6289299361</p>
                </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
                <div className='contact__form-group grid'>
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Your Full Name <b>*</b></label>
                        <input 
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            className="contact__form-input"
                        />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Your Email Address <b>*</b></label>
                        <input
                            type='email'
                            className="contact__form-input"
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Subject <b>*</b></label>
                    <input
                        type='text'
                        className="contact__form-input"
                        name='subject'
                        value={form.subject}
                        onChange={handleChange}
                    />
                </div>

                <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag text-cs">Your Message <b>*</b></label>
                    <textarea
                        className='contact__form-input'
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="contact__submit">
                    <p>* Accept the terms and conditions.</p>
                    <button className={`btn text-cs ${noSubmit?'invalidform':''}`}>
                    <span className="btntxt">Send Message</span>
                    </button>
                </div>
            </form>
        </div>
        <div className="section__deco deco__right">
          <img src={shapeOne} alt="" className="shape" />
        </div>
    </section>
    </div>
  )
}

export default Contact