import React from 'react';
import Category from './Category';

class CategoriesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: [
                {
                    title: 'Popular on Netflix',
                    pics: [
                        {
                            src: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true'
                        },
                        {
                            src: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true'
                        },
                        {
                            src: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true'
                        },
                        {
                            src: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true'
                        },
                        {
                            src: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true'
                        },
                        {
                            src: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true'
                        },
                        {
                            src: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true'
                        },
                        {
                            src: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true'
                        },
                        {
                            src: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true'
                        },
                        {
                            src: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true'
                        },
                        {
                            src: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p11.PNG?raw=true'
                        },
                        {
                            src: 'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p12.PNG?raw=true'
                        }
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <section class="main-container">
                <div class="location" id="home">
                    <Category title="Popular on Netflix" genreId="18"/>
                    <Category title="Trending Now" genreId="18"/>
                    <Category title="TV Shows" genreId="18"/>
                    <Category title="Blockbuster Action & Adventure" genreId="18"/>
                </div>
            </section>
        )
    };
};

export default CategoriesList;