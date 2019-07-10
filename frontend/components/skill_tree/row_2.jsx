import React from 'react'
import SkillModalContainer from './skill_modal/skill_modal_container';
import Basics2Container from './skills/basics_2_container';
import GreetingsContainer from './skills/greetings_container';

class Row2 extends React.Component {
    constructor(props) {
        super(props)
    }
// to use a modal, need to have a component did mount!
    render() {
        let name1;
        let name2;
        let language = this.props.currentUser.learning_language_string

        if (language === "French") {
            name1 = "Greetings"
            name2 = "Basics 2"
        } else if (language === "Spanish") {
            name1 = "Phrases"
            name2 = "Travel"
        } else if (language === "Japanese") {
            name1 = "Hiragana 2"
            name2 = "Hiragana 3"
        } else if (language === "German") {
            name1 = "Basics 2"
            name2 = "Phrases"
        }

        return (


            <div className="lessons-row-container">

                
                <GreetingsContainer name1 = {name1} />
                <Basics2Container name2 = {name2} />

                
            </div>
        )
    }
}

export default Row2 