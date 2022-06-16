// React Imports
import React from 'react'

// Next JS Imports
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// Component Imports
import NavBar from '../components/navbar'
import Footer from '../components/footer'

// Content Imports
import abbott from '../public/abbott.png'
import beto from '../public/beto.png'
import perry from '../public/perry.png'


class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <Head>
                    <title>Polly</title>
                </Head>

                <NavBar />

                <div id="mainBlock" className="rounded-lg flex flex-col justify-center items-center mx-auto w-2/3 mb-10 px-5 py-44 font-dongji">
                    <h1 className="mt-5 text-slate-600 text-5xl font-bold"><span className="text-violet-500 text-7xl">Polly, </span>the power of you.</h1>
                    <p className="mt-5 font-dongji text-3xl">Solve real-world issues from the comfort of your home.</p>
                    <Link href="/api/auth/signin"><a className="duration-200 mt-10 px-3.5 py-2.5 border-2 border-violet-500 text-white bg-violet-500 rounded-lg hover:border-2 hover:border-violet-500 hover:bg-white hover:text-violet-500">Open In Browser</a></Link>
                </div>


                <div id="introBlock" className="bg-violet-50 w-full mb-10 font-dongji">
                    <div className="flex w-2/3 mx-auto">
                        <div className="rounded-tl-lg rounded-bl-lg bg-blue-200 w-1/2">
                            
                        </div>

                        <div className="text-slate-600 w-1/2 px-10 py-20 mx-auto text-left">
                            <h1 className="lg:text-5xl sm:text-4xl font-bold mb-10"><span className="block">Stay informed</span> on local elections <span className="block text-violet-500">anywhere</span></h1>
                            <li className="list-none">
                                <ul className="w-full mb-10">
                                    <div className="flex">
                                        <div className='h-full mt-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                            </svg>    
                                        </div>

                                        <div>
                                            <h1 className="text-2xl font-semibold">Election Updates</h1>    
                                            <p className="mt-1 text-lg">Check daily election data to<span className="block">stay up to date on action items/events,</span>or have us remind you!</p>    
                                        </div> 
                                    </div>
                                </ul>
                                
                                <ul className="w-full mb-10">
                                    <div className="flex">
                                        <div className='h-full mt-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                            </svg>    
                                        </div>

                                        <div>
                                            <h1 className="text-2xl font-semibold">Mobile Apps</h1>    
                                            <p className="mt-1 text-lg">Take Polly on the go!<span className="block">With full functionality on portable devices,</span>you're guaranteed not to miss a beat.</p>    
                                        </div> 
                                    </div>
                                </ul>
                            </li>
                        </div>    
                    </div>
                    
                </div>


                <div id="cardsBlock" className="w-full p-5 font-dongji mb-10">
                    <div className="flex w-2/3 mx-auto">
                        <div className="text-slate-600 w-1/2 px-10 py-20 mx-auto text-left">
                            <h1 className="lg:text-5xl sm:text-4xl font-bold mb-10">Learn more about <span className="block">your <span className="text-violet-500">politicians</span></span></h1>
                            <li className="list-none">
                                <ul className="w-full mb-10">
                                    <div className="flex">
                                        <div className='h-full mt-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                            </svg>    
                                        </div>

                                        <div>
                                            <h1 className="text-2xl font-semibold">Local Events</h1>    
                                            <p className="mt-1 text-lg">Get notified when your politicians host <span className="block">events such as townhouse talks or meet-ups.</span></p>    
                                        </div> 
                                    </div>
                                </ul>
                                
                                <ul className="w-full mb-10">
                                    <div className="flex">
                                        <div className='h-full mt-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                            </svg>    
                                        </div>

                                        <div>
                                            <h1 className="text-2xl font-semibold">Candidate Cards</h1>    
                                            <p className="mt-1 text-lg">View curated information on candidates<span className="block">sourced and cited from government sites regularly</span>to help you digest stances.</p>    
                                        </div> 
                                    </div>
                                </ul>
                            </li>
                        </div>

                        <div className="rounded-tl-lg rounded-bl-lg bg-blue-200 w-1/2">
                            
                        </div>   
                    </div>
                </div>

                <div id="bulletinBlock" className="bg-violet-50 w-full mb-10 font-dongji">
                    <div className="flex w-2/3 mx-auto">
                        <div className="rounded-tl-lg rounded-bl-lg bg-blue-200 w-1/2">
                            
                        </div>

                        <div className="text-slate-600 w-1/2 px-10 py-20 mx-auto text-left">
                            <h1 className="lg:text-5xl sm:text-4xl font-bold mb-10"><span className="block">Work together</span> to <span className="text-violet-500">improve</span> your <span className="block">community</span></h1>
                            <li className="list-none">
                                <ul className="w-full mb-10">
                                    <div className="flex">
                                        <div className='h-full mt-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                            </svg>    
                                        </div>

                                        <div>
                                            <h1 className="text-2xl font-semibold">Community Bulletin</h1>    
                                            <p className="mt-1 text-lg">Post about problems you want solved.<span className="block">Look at rankings to see which items are<span className="block">top priority to your neighbors.</span></span></p>    
                                        </div> 
                                    </div>
                                </ul>
                                
                            </li>
                        </div>    
                    </div>
                    
                </div>

                <div id="socials" className="mb-10 w-full font-dongji py-24">
                    <div className="w-2/3 mx-auto flex justify-evenly items-center">
                        <Link href="https://facebook.com/">
                            <svg className="h-12 w-12 cursor-pointer" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Facebook</title>
                                <path fill="#A78BFA" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </Link>

                        <Link href="https://instagram.com/">
                            <svg className="h-12 w-12 cursor-pointer" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Instagram</title>
                                <path fill="#A78BFA" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                            </svg>
                        </Link>
                        
                        <Link href="https://discord.com/">
                            <svg className="h-12 w-12 cursor-pointer" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Discord</title>
                                <path fill="#A78BFA" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                            </svg>
                        </Link>
                        
                        <Link href="https://twitter.com/">
                            <svg className="h-12 w-12 cursor-pointer" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Twitter</title>
                                <path fill="#A78BFA" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>    
                        </Link>
                        
                        <Link href="https://gmail.com/">
                            <svg className="h-12 w-12 cursor-pointer" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Gmail</title>
                                <path fill="#A78BFA" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                            </svg>    
                        </Link>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}

export default Home