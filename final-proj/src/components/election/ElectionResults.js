

export const ElectionResults = (props) => {

    const { shouldDisplay } = props;
    return (
        <div>
            {shouldDisplay && (
                <table>
                    <thead>
                        <tr>
                            <td>Results</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>{obj.question</td> */}
                        </tr>
                    </tbody>
                </table>
            )}
            <h1>nothing to see</h1>
        </div>
    )
}