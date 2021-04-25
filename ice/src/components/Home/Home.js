// eslint-disable-next-line
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import rightArrow from '../../a_assets/images/rightArrow.png';
import Excavating from '../../a_assets/images/Excavating.png';
import Snowblowing from '../../a_assets/images/Snowblower.png';
import icon from '../../a_assets/images/graySquare.png';
import star from '../../a_assets/images/star1.png';

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {

    console.log('in UseEffect');
    dispatch({
      type: 'FETCH_CUSTOMER',
    });
  }, [dispatch]);


  let title = "Your heavy lifting ends here!";
  let description = "Are you looking for industry leading contractors that are reliable, quality, and fair priced? Well I guess we couldn't hide forever. See what ICE Contractors can do for your projects with a 2 minute quote!";
  let quoteDescription = "Get a quote in under 2 minutes for your excavating, contracting and snow removal needs. Enter your zip code.";

  let customer = {
    customer: {
      customer_first_name: "Gene",
      customer_last_name: "Iserman",
      customer_company_name: "Electron Ltd",
      customer_email: "johndoe@zuper.com",
      customer_category: "5f1a48d11289d5e82e798167",
    },
  };

  let expectations = [
    {
      icon: icon,
      title: 'Relability',
      description: 'We do what we say we are going to do to earn our customers trust. Every Time!',
    },
    {
      icon: icon,
      title: 'Professional Service',
      description: 'It matters to us that you get the quality service that you deserve.',
    },
    {
      icon: icon,
      title: 'Hassle-Free Quotes',
      description: 'Get a customized quote in minutes and schedule service immediately.',
    },
    {
      icon: icon,
      title: 'Transparency',
      description: 'Surprises, in this business are not a good thing.',
    },
    {
      icon: icon,
      title: 'Need Info',
      description: 'More Info',
    },
    {
      icon: icon,
      title: 'Honest Pricing',
      description: 'Competitive rates with no hidden costs.',
    },
    {
      icon: icon,
      title: 'Customer Experience Guarantee',
      description: 'We care about every aspect of our service. If you aren\'t happy, we will make it right!',
    }
  ];


  const [active, setActive] = useState('notActive');
  const [zipcode, setZipcode] = useState('');

  const beginQuote = () => {
    console.log('in begin quote and showing zipcode', zipcode);
    createCustomer();
  }

  const createCustomer = () => {
    console.log('in createCustomer');
    dispatch({
      type: 'ADD_CUSTOMER',
      payload: customer
    });
  };


  return (
    <div className='home'>
      <div className='home__b491'>
        <h2 className='home__b--i974'>{title}</h2>
        <p className='home__b--i230'>{description}</p>
        <div className='home__b__b516'>
          <p className='home__b__b--i900'>{quoteDescription}</p>
          <div className='home__b__b__b912'>
            <input type="text" name="zipcode" className='home__b__b__b--i582' placeholder='Enter your zipcode' onChange={(e) => setZipcode(e.target.value)} />
            <button className='home__b__b__b--i368' onClick={beginQuote}>Get my Quote <img className='home__b__b__b--i--i440' src={rightArrow} alt='' /></button>
          </div>
        </div>
      </div>
      <div className='home__b383'>
        <div
          className={active === 'snowActive' || active === 'notActive' ? 'home__b__b746' : 'home__b__b746 path-active'}
          onMouseEnter={() => setActive('snowActive')}
          onMouseLeave={() => setActive('notActive')}
        >
          <img className='home__b__b--i478' src={Snowblowing} alt='' />
          <p className='home__b__b--i416'>Snow Removal</p>
        </div>
        <div
          className={active === 'excavatingActive' || active === 'notActive' ? 'home__b__b198' : 'home__b__b198 path-active'}
          onMouseEnter={() => setActive('excavatingActive')}
          onMouseLeave={() => setActive('notActive')}
        >
          <img className='home__b__b--i618' src={Excavating} alt='' />
          <p className='home__b__b--i785'>Excavation</p>
        </div>
      </div>
      <div className='home__b226'>
        <h3 className='home__b__b512'>What Can you Expect From ICE?</h3>
        <div className='home__b__b444'>
          {expectations.map((promise, index) =>
            index !== 6 ?
              <div key={index} className='home__b__b__b737'>
                <img className='home__b__b__b--i436' src={promise.icon} alt='' />
                <h3 className='home__b__b__b__b991'>{promise.title}</h3>
                <p className='home__b__b__b__b419'>{promise.description}</p>
              </div>
              :
              ''
          )}
        </div>
        <div className='home__b__b405'>
          {expectations.length - 1 === 6 ?
            <div className='home__b__b__b664'>
              <img className='home__b__b__b--i311' src={expectations[6].icon} alt='' />
              <h3 className='home__b__b__b__b553'>{expectations[6].title}</h3>
              <p className='home__b__b__b__b404'>{expectations[6].description}</p>
            </div>
            :
            ''
          }
        </div>
      </div>
      <div className='home_b808'>
        <h3 className='home_b__b547'>Proven Satisfaction</h3>
        <p className='home_b__b396'>Don’t take our word for it, see our reviews on these popular sites</p>
        <div className='home_b__b425'>
          {[{ name: 'Google', link: 'https://www.google.com' },
          { name: 'Thumbtack', link: 'https://www.thumbtack.com' },
          { name: 'Home Advisor', link: 'https://www.homeadvisor.com' }]
            .map(i =>
              <div key={i.name} className='home_b__b__b855'>
                <div className='home_b__b__b__b972'>
                  {[1, 2, 3, 4, 5].map(k =>
                    <img key={k} src={star} alt='' className='home_b__b__b__b--i671' />
                  )}
                </div>
                <p className='home_b__b__b__b663'>5 stars on {i.name}</p>
                <p className='home_b__b__b__b184'><a className='home_b__b__b__b--i196' href={i.link}>See Reviews</a></p>
              </div>
            )}
        </div>
      </div>
    </div >
  );
}

export default Home;
