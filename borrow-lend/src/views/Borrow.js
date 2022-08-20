import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../utils/SectionProps';
import SectionHeader from '../components/layout/partials/SectionHeader';
import Image from '../components/elements/Image';
import Titre from '../components/sections/Titre';
import Select from '../components/elements/Select1';
import Slider from '../components/elements/Slider';
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';



const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Part = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <Titre></Titre>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">

                </div>
                <h4 className="mt-0 mb-12">
                  NFT borrowing
                </h4>
                <Input id="URL" type="text" label="Subscribe" labelHidden hasIcon="right" placeholder="URL NFT"></Input>
                <br></br>
                <h4 className="mt-0 mb-12">
                  Market Place
                </h4>
                <Select></Select>
                <br></br>
                <h4 className="mt-0 mb-12">
                  Time of borrowing (months)
                </h4>
                <Slider></Slider>

                <Button tag="a" color="primary" wideMobile href="">
                  Next
                </Button>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../assets/images/i6.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>




          </div>
        </div>
      </div>
    </section>
  );
}

Part.propTypes = propTypes;
Part.defaultProps = defaultProps;

export default Part;