// eslint-disable-next-line
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import rightArrow from '../../a_assets/images/rightArrow.png';
import Excavating from '../../a_assets/images/Excavating.png';
import Snowblowing from '../../a_assets/images/Snowblower.png';
import star from '../../a_assets/images/star1.png';

// Expectations assets
import ICE_Customer_Exp from '../../a_assets/images/ICE_Customer_Exp.png';
import ICE_Hassle_Free from '../../a_assets/images/ICE_Hassle_Free.png';
import ICE_Profess_Serv from '../../a_assets/images/ICE_Profess_Serv.png';
import ICE_Reliabiility from '../../a_assets/images/ICE_Reliabiility.png';
import ICE_Transparency from '../../a_assets/images/ICE_Transparency.png';
import ICE_Honest_Pricing from '../../a_assets/images/ICE_Honest_Pricing.png';
import mapStoreToProps from '../../redux/mapStoreToProps';

function Home(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    let pathname = document.URL.search('/quote');
    // dispatch({
    //   type: 'FETCH_CUSTOMER',
    // });
    dispatch({
      type: 'CHECK_FOR_QUOTE',
      payload: pathname
    });
  }, [dispatch]);


  let title = "Your heavy lifting ends here!";
  let description = "Are you looking for industry leading contractors that are reliable, quality, and fair priced? Well I guess we couldn't hide forever. See what ICE Contractors can do for your projects with a 2 minute quote!";
  // let quoteDescription = "Get a quote in under 2 minutes for your excavating, contracting and snow removal needs. Enter your zip code.";

  let expectations = [
    {
      icon: ICE_Reliabiility,
      title: 'Relability',
      description: 'We do what we say we are going to do to earn our customers trust. Every Time!',
    },
    {
      icon: ICE_Profess_Serv,
      title: 'Professional Service',
      description: 'It matters to us that you get the quality service that you deserve.',
    },
    {
      icon: ICE_Hassle_Free,
      title: 'Hassle-Free Quotes',
      description: 'Get a customized quote in minutes and schedule service immediately.',
    },
    {
      icon: ICE_Transparency,
      title: 'Transparency',
      description: 'Surprises, in this business are not a good thing.',
    },
    {
      icon: ICE_Honest_Pricing,
      title: 'Honest Pricing',
      description: 'Competitive rates with no hidden costs.',
    },
    {
      icon: ICE_Customer_Exp,
      title: 'Customer Experience Guarantee',
      description: 'We care about every aspect of our service. If you aren\'t happy, we will make it right!',
    }
  ];



  const [active, setActive] = useState('notActive');
  // const [zipcode, setZipcode] = useState('');

  // const beginQuote = () => {
  //   console.log('in begin quote and showing zipcode', zipcode);
  //   createCustomer();
  // }

  // const createCustomer = () => {
  //   console.log('in createCustomer');
  //   dispatch({
  //     type: 'ADD_CUSTOMER',
  //     payload: customer
  //   });
  // };

  const goForward = () => {
    dispatch({
      type: 'QUOTE_PROGRESS',
      payload: { divisor: 9, step_number: 2 }
    });
    props.history.push('quote/name');
  }


  return (
    <div className='home'>
      <div className='home__b491'>
        <h2 className='home__b--i974'>{title}</h2>
        <p className='home__b--i230'>{description}</p>
        <div className='home__b__b516'>
          {/* <p className='home__b__b--i900'>{quoteDescription}</p>
          <div className='home__b__b__b912'>
            <input type="text" name="zipcode" className='home__b__b__b--i582' placeholder='Enter your zipcode' onChange={(e) => setZipcode(e.target.value)} />
            <button className='home__b__b__b--i368' onClick={beginQuote}>Get my Quote <img className='home__b__b__b--i--i440' src={rightArrow} alt='' /></button>
          </div> */}
        </div>
      </div>
      <div className='home__b383'>
        <div
          className={active === 'snowActive' || active === 'notActive' ? 'home__b__b746' : 'home__b__b746 path-active'}
          onMouseEnter={() => setActive('snowActive')}
          onMouseLeave={() => setActive('notActive')}
        >
          <img
            className='home__b__b--i478'
            src={Snowblowing}
            alt='snowblowing'
            onClick={goForward}
          />
          <p className='home__b__b--i416'>Snow Removal</p>
        </div>
        <div
          className={active === 'excavatingActive' || active === 'notActive' ? 'home__b__b198' : 'home__b__b198 path-active'}
          onMouseEnter={() => setActive('excavatingActive')}
          onMouseLeave={() => setActive('notActive')}
        >
          <img
            className='home__b__b--i618'
            src={Excavating}
            alt='excavating'
            onClick={goForward}
          />
          <p className='home__b__b--i785'>Excavation</p>
        </div>
      </div>
      <div className='home__b226'>
        <h3 className='home__b__b512'>What Can you Expect From ICE?</h3>
        <div className='home__b__b444'>
          {expectations.map((promise, index) =>
            index !== 6 ?
              <div key={index} className='home__b__b__b737'>
                <div className='home__b__b__b__b436'>
                  <img src={promise.icon} alt={promise.title} />
                </div>
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
      <div id="mapid"></div>
    </div >
  );
}

export default connect(mapStoreToProps)(withRouter(Home));
