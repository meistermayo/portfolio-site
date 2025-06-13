import { DeviceData } from "../types/DeviceData";
interface Props {
    devices: Array<DeviceData>
    onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function DeviceSelect({devices, onSelect} : Props)
{
    return (
            <select onChange={onSelect}>
            {devices.length == 0 ? (
                <option key={-1} value={-1}>None</option>
            ) : (
                devices.map(
                    (d: DeviceData) => (
                        <option key={d.id} value={d.id}>
                            {d.name}
                        </option>
                    )
                )
            )}
        </select>
    );
}