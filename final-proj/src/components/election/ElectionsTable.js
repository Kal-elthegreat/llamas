import { ElectionRow } from './ElectionRow';
import './index.css'

export const ElectionsTable = (props) => {
    const { data } = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map(el => {
                    return (
                        <ElectionRow
                            key={el.id}
                            election={el}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}