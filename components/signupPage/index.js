import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function SignUpPage(){
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/register', {
        email: formData.email,
        password: formData.password,
      });
      router.replace("/userList");
      console.log('Registration successful:', response.data);
      // You can handle the successful registration response here
    } catch (error) {
      console.error('Error during registration:', error.message);
      // You can handle the error here (display an error message, etc.)
    }
  };

  
    return (
    <section className="p-0">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5 col-md-7 col-12 mt-4">
            <form onSubmit={handleSubmit}>
              <div className="contact-form-wrapper bg-primary bg-opacity-10 p-md-5 p-2 pt-1 rounded">
                <div className="row my-2">
                  <div className="col-12">
                    <h2 className="contact-form-heading text-center">
                      Get In Touch
                    </h2>
                    <p className="contact-form-paragh text-center">
                      Faucibus ultrices facilisis odio amet, luctus vehicula,
                      turpis elit. Sed placerat.
                    </p>
                  </div>
                  <div className="col-12 my-2">
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Full name"
                      aria-label="Full name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12 my-2">
                    <input
                      type="email"
                      className="form-control shadow-none"
                      placeholder="Email"
                      aria-label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12 my-2">
                    <input
                      type="password"
                      className="form-control shadow-none"
                      placeholder="Password"
                      aria-label="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12 my-2">
                    <input
                      type="password"
                      className="form-control shadow-none"
                      placeholder="Confirm Password"
                      aria-label="c-password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12 mx-auto my-2 mt-4">
                    <button
                      className="btn w-100 py-3 bg-primary text-white bg-opacity-50"
                      type="submit"
                    >
                      <i className="fa fa-lock"></i> Signup
                    </button>
                  </div>
                  <div className="col-12 mt-4 d-flex justify-content-between">
                    <a href="./index.html" className="text-primary">
                      <i className="fa fa-arrow-left"></i> Back
                    </a>
                    <a href="./login.html" className="text-primary">
                      Login <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

}
export default SignUpPage;
