import { Component } from "@wordpress/element";
import { RichText, MediaPlaceholder, BlockControls, MediaUpload, MediaUploadCheck, InspectorControls, URLInput } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";
import { Spinner, withNotices, Toolbar, IconButton, PanelBody, TextareaControl, SelectControl, Dashicon, Tooltip, TextControl } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

class TeamMemberEdit extends Component {

    state = {
        selectedLink: null
    }

    componentDidMount() {
        const {attributes, setAttributes} = this.props;
        const { url, id } = attributes;
        if( url && isBlobURL(url) && !id ) {
            setAttributes({
                url: '',
                alt: ''
            })
        }
    }
    componentDidUpdate( prevProps ) {
        if(prevProps.isSelected && !this.props.isSelected) {
            this.setState({
                selectedLink: null
            })
        }
    }
    onChangeTitle = (title) => {
        this.props.setAttributes({title});
    }
    onChangeInfo = (info) => {
        this.props.setAttributes({info});
    }
    onSelectImage = ({id, url, alt}) => {
        this.props.setAttributes({
            id, url, alt
        });
    }
    onSelectURL = ({url}) => {
        this.props.setAttributes({
            url,
            id: null,
            alt: ''
        })
    }
    onUploadError = (message) => {
        const { noticeOperations } = this.props;
        noticeOperations.createErrorNotice(message);
    }
    removeImage = () => {
        this.props.setAttributes({
            id: null,
            url: '',
            alt: ''
        })
    }
    updateAlt = (alt) => {
        this.props.setAttributes({
            alt
        })
    }
    onImageSizeChange = (url) => {
        this.props.setAttributes({
            url
        })
    }
    getImageSizes() {
        const { image, imageSizes } = this.props;
        if (!image) return [];
        let options = [];
        const sizes = image.media_details.sizes;
        for( const key in sizes ) {
            const size = sizes[key];
            const imageSize = imageSizes.find(size => size.slug === key);
            if (imageSize) {
                options.push({
                    label: imageSize.name,
                    value: size.source_url
                })
            }
        }
        return options;
    }
    addNewLink = () => {
        const { setAttributes, attributes } = this.props;
        const { social } = attributes;
        setAttributes({
            social: [...social, {link: '', icon: 'wordpress'}]
        })
        this.setState({
            selectedLink: social.length
        })
    }
    updateSocialItem = (type, value) => {
        const { setAttributes, attributes } = this.props;
        const { social } = attributes;
        const { selectedLink } = this.state;
        let new_social = [...social];
        new_social[selectedLink][type] = value;
        setAttributes({social: new_social});
    }
    removeLink = (e) => {
        e.preventDefault();
        const { setAttributes, attributes } = this.props;
        const { social } = attributes;
        const { selectedLink } = this.state;
        setAttributes({
            social: [...social.slice(0, selectedLink), ...social.slice(selectedLink + 1)]
        })
        this.setState({
            selectedLink: null
        })
    }
    onSortEnd = (oldIndex, newIndex) => {
        const { setAttributes, attributes } = this.props;
        const { social } = attributes;
        let new_social = arrayMove(social, oldIndex, newIndex);
        setAttributes({social: new_social});
        this.setState({selectedLink: null});
    }
    render() {
        const { className, attributes, noticeUI, isSelected } = this.props;
        const { title, info, url, alt, id, social } = attributes;

        const SortableList = SortableContainer(() => {
            return (
                <ul>
                    {social.map((item, index) => {
                        let SortableItem = SortableElement(() => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => this.setState({selectedLink: index})}
                                    className={this.state.selectedLink === index ? 'is-selected' : null}
                                >
                                    <Dashicon icon={item.icon} size={16} />
                                </li>
                            )
                        })
                        return <SortableItem key={index} index={index} />
                    })}
                    {isSelected &&
                        <li className={'wp-block-mytheme-blocks-team-member__addIconLI'}>
                            <Tooltip text={__('Add Item', 'mytheme-blocks')}>
                                <button
                                    className={'wp-block-mytheme-blocks-team-member__addIcon'}
                                    onClick={ this.addNewLink }
                                >
                                    <Dashicon icon={'plus'} size={14} />
                                </button>
                            </Tooltip>
                        </li>
                    }
                </ul>
            )
        })
        return (
            <>  
                <InspectorControls>
                    <PanelBody title={ __("Image Settings", "mytheme-blocks") }>
                        {(url && !isBlobURL(url)) &&
                            <TextareaControl 
                                label={ __('Alt Text', "mytheme-blocks") }
                                value={ alt }
                                onChange={ this.updateAlt }
                                help={ __( 'Alternative text describes the image to people who can not see it', 'mytheme-blocks') }
                            />
                        }
                        {id && 
                            <SelectControl 
                                label={ __('Image Size', "mytheme-blocks") }
                                options={ this.getImageSizes() }
                                onChange={ this.onImageSizeChange }
                                value={url}
                            />
                        }
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    {url &&
                        <Toolbar>
                            {id && 
                                <MediaUploadCheck>
                                    <MediaUpload 
                                        onSelect={ this.onSelectImage }
                                        allowedTypes={['image']}
                                        value={ id }
                                        render={({open}) => {
                                            return (
                                                <IconButton 
                                                    className="components-icon-button components-toolbar__control"
                                                    label={ __('Remove Image', 'mytheme-blocks') }
                                                    onClick={ open }
                                                    icon="edit"
                                                />
                                            )
                                        }}
                                    />
                                </MediaUploadCheck>
                            }
                            <IconButton 
                                className="components-icon-button components-toolbar__control"
                                label={ __('Remove Image', 'mytheme-blocks') }
                                onClick={ this.removeImage }
                                icon="trash"
                            />
                        </Toolbar>
                    }
                </BlockControls>
                <div className={ className }>
                    {url ? 
                        <>
                            <img src={url} alt={alt} />
                            {isBlobURL(url) && <Spinner />}
                        </>
                        : <MediaPlaceholder 
                            icon="format-image"
                            onSelect={this.onSelectImage}
                            onSelectURL={this.onSelectURL}
                            onError={this.onUploadError}
                            accept="image/*"
                            allowedTypes={['image']}
                            notices={noticeUI}
                        />
                    }
                    <RichText 
                        className={'wp-block-mytheme-blocks-teammember__title'}
                        tagName="h4"
                        onChange={this.onChangeTitle}
                        value={title}
                        placeholder={__('Member Name', 'mytheme-blocks')}
                        formattingControls={[]}
                    />
                    <RichText 
                        className={'wp-block-mytheme-blocks-teammember__info'}
                        tagName="p"
                        onChange={this.onChangeInfo}
                        value={info}
                        placeholder={__('Member Info', 'mytheme-blocks')}
                        formattingControls={[]}
                    />
                    <div className={'wp-block-mytheme-blocks-teammember__social'}>
                        <SortableList 
                            axis="x"
                            helperClass={'social_dragging'}
                            distance={10}
                            onSortEnd={({oldIndex, newIndex}) => this.onSortEnd(oldIndex, newIndex) }
                        />
                        {/* <ul>
                            {social.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => this.setState({selectedLink: index})}
                                        className={ this.state.selectedLink === index ? 'is-selected' : null }
                                    ><Dashicon icon={item.icon} size={16} /></li>
                                )
                            })}
                            {isSelected && 
                                <li className={'wp-block-mytheme-blocks-teammember__addIconLI'}>
                                    <Tooltip text={__('Add Item', 'mytheme-blocks')}>
                                        <button className={'wp-block-mytheme-blocks-teammember__addIcon'} onClick={this.addNewLink}>
                                            <Dashicon icon={'plus'} size={14}/>
                                        </button>
                                    </Tooltip>
                                </li>
                            }
                        </ul> */}
                    </div>
                    {this.state.selectedLink !== null && 
                        <div className={'wp-block-mytheme-blocks-teammember__linkForm'}>
                                <TextControl 
                                    label={__('Icon', 'mytheme-blocks')}
                                    value={social[this.state.selectedLink].icon}
                                    onChange={(icon) => this.updateSocialItem('icon', icon)}
                                />
                                <URLInput 
                                    label={__('URL', 'mytheme-blocks')}
                                    value={social[this.state.selectedLink].link}
                                    onChange={(url) => this.updateSocialItem('link', url)}
                                />
                                <a className={'wp-block-mytheme-blocks-teammember__removeLink'}
                                    onChange={this.removeLink}>
                                    {__('Remove Link', 'mytheme-blocks')}
                                </a>
                        </div>
                    }
                </div>
            </>
        )

    }
}

export default withSelect((select, props) => {
    const id = props.attributes.id;
    return {
        image: id ? select('core').getMedia(id) : null,
        imageSizes: select('core/editor').getEditorSettings().imageSizes
    }
})(withNotices(TeamMemberEdit));