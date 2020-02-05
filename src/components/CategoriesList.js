import React from 'react';
import Category from './Category';
import SearchResults from './SearchResults';

class CategoriesList extends React.Component {
    render() {
        return (
            <section class="main-container">
                <div class="location" id="home">
                    {this.renderCategories()}
                </div>
            </section>
        )
    };
    renderCategories() {
        if (this.props.match && this.props.match.params.searchTerm) {
            return <SearchResults searchTerm={this.props.match.params.searchTerm}/>
        } else if (this.props.match && this.props.match.params.genreId) {
            return (
                <div>
                    <Category key={`genreId-${this.props.match.params.genreId}`} title={this.props.match.params.genreName} genreId={this.props.match.params.genreId}/>
                </div>
            );
        } else {
            return (
                <div>
                    <Category title="Adventure" genreId="12"/>
                    <Category title="Animation" genreId="16"/>
                    <Category title="Crime" genreId="80"/>
                    <Category title="Documentary" genreId="99"/>
                    <Category title="Romance" genreId="10749"/>
                    <Category title="Thriller" genreId="53"/>
                </div>
            );
        }
    }
};

export default CategoriesList;