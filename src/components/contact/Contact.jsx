import Back from "../common/back/Back"
import './Contact.css'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58955.07201929346!2d88.489984!3d22.5532076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722108920858!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

    return (
        <>
            <Back title='Contact us' />
            <section className='contacts padding'>
                <div className='container shadow flexSB'>
                    <div className='left row'>
                        <iframe src={map}></iframe>
                    </div>
                    <div className='right row'>
                        <h1>Contact us</h1>
                        <p> We are open for any Time or just to have a chat</p>

                        <div className='items grid2'>
                            <div className='box'>
                                <h4>ADDRESS:</h4>
                                <p>Action Area II, BiswaBangla ,Newtown, Kolkata ,700156</p>
                            </div>
                            <div className='box'>
                                <h4>EMAIL:</h4>
                                <p> trishamandal462.com</p>
                            </div>
                            <div className='box'>
                                <h4>PHONE:</h4>
                                <p> 91+ 8670881002</p>
                            </div>
                        </div>

                        <form action=''>
                            <div className='flexSB'>
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                            </div>
                            <input type='text' placeholder='Subject' />
                            <textarea cols='30' rows='10'>
                                Create a message here...
                            </textarea>
                            <button className='primary-btn'>SEND ME MESSAGE</button>
                        </form>

                        <h3>Follow us here</h3>
                        <span>GITHUB TWITTER INSTAGRAM DRIBBBLE</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact