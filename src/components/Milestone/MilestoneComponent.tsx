type MilestoneComponentProps = {
    textToDisplay?: string;
};

export default function MilestoneComponent({textToDisplay} : MilestoneComponentProps) {

    return ( 

            <div className="flex min-w-1/5 border-2 justify-center">

                
            {textToDisplay} 
                

            </div>
           )

}
