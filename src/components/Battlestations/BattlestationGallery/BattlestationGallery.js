import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-grid-gallery';
import './main.css'
import bs20131 from '../../../media/battlestations/2013(1).jpg'
import bs20132 from '../../../media/battlestations/2013(2).jpg'
import bs2014 from '../../../media/battlestations/2014.jpg'
import bs2015 from '../../../media/battlestations/2015.jpg'
import bs2016 from '../../../media/battlestations/2016.jpg'
import bs2018 from '../../../media/battlestations/2018.jpg'
import bs2019 from '../../../media/battlestations/2019.jpeg'
import bs20201 from '../../../media/battlestations/2020(1).jpg'
import bs20202 from '../../../media/battlestations/2020(2).jpg'

class BattlestationGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: this.props.images
        };
    }

    render() {
        return (
            <div style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                overflow: "auto",
                textAlign: "center",

            }}>
                <Gallery
                    images={this.state.images}
                    enableImageSelection={false}
                    margin={15}
                    rowHeight={"40vh"}
                />
            </div>
        );
    }
}

BattlestationGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};

BattlestationGallery.defaultProps = {
    images: [
        {
            src: bs20131,
            thumbnail: bs20131,
            thumbnailWidth: "50vw",
            thumbnailHeight: "20vh",
            caption: "Battlestation in 2013 (start of year)",
            thumbnailCaption: (<span style={{color: "black"}}>2013</span>)
        },
        {
            src: bs20132,
            thumbnail: bs20132,
            thumbnailWidth: "50vw",
            thumbnailHeight: "20vh",
            caption: "Battlestation in 2013 (end of year)",
            thumbnailCaption: (<span style={{color: "black"}}>2013</span>),
        },
        {
            src: bs2014,
            thumbnail: bs2014,
            thumbnailWidth: "50vw",
            thumbnailHeight: "20vh",
            caption: "Battlestation in 2014",
            thumbnailCaption: (<span style={{color: "black"}}>2014</span>),
        },
        {
            src: bs2015,
            thumbnail: bs2015,
            thumbnailWidth: "50vw",
            thumbnailHeight: "20vh",
            caption: "Battlestation in 2015",
            thumbnailCaption: (<span style={{color: "black"}}>2015</span>),
        },
        {
            src: bs2016,
            thumbnail: bs2016,
            thumbnailWidth: "50vw",
            thumbnailHeight: "20vh",
            caption: "Battlestation in 2016",
            thumbnailCaption: (<span style={{color: "black"}}>2016</span>),
        },
        {
            src: bs2018,
            thumbnail: bs2018,
            thumbnailWidth: "1080",
            thumbnailHeight: "20vh",
            caption: "Battlestation in 2018",
            thumbnailCaption: (<span style={{color: "black"}}>2018</span>),
        },
        {
            src: bs2019,
            thumbnail: bs2019,
            thumbnailWidth: "50vw",
            thumbnailHeight: "20vh",
            caption: "Battlestation in 2019",
            thumbnailCaption: (<span style={{color: "black"}}>2019</span>),
        },
        {
            src: bs20201,
            thumbnail: bs20201,

            caption: "Battlestation in 2020",
            thumbnailCaption: (<span style={{color: "black"}}>2020</span>),
        },
        {
            src: bs20202,
            thumbnail: bs20202,

            caption: "Battlestation in 2020",
            thumbnailCaption: (<span style={{color: "black"}}>2020</span>),
        }
    ]
};

export default BattlestationGallery;
