const sliderIcon = ({
    step
}) => (
    <div>
        <svg width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill={step == 1 ? "white" : "#4E4E4E"} />
            <circle cx="13" cy="3" r="3" fill={step == 2 ? "white" : "#4E4E4E"} />
            <circle cx="23" cy="3" r="3" fill={step == 3 ? "white" : "#4E4E4E"} />
        </svg>
    </div>
   );

export default sliderIcon;


