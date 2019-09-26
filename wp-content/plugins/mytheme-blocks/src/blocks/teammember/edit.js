import { Component } from "@wordpress/element";
import { RichText, MediaPlaceholder, BlockControls, MediaUpload, MediaUploadCheck } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";
import { Spinner, withNotices, Toolbar, IconButton } from "@wordpress/components";

class TeamMemberEdit extends Component {
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
    render() {
        const { className, attributes, noticeUI } = this.props;
        const { title, info, url, alt, id } = attributes;
        return (
            <>
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
                            <img src={src} alt={alt} />
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

                </div>
            </>
        )

    }
}

export default withNotices(TeamMemberEdit);