export default function InputMezo({ label, type, value, setValue, placeholder }) {
    return (
        <div className="mb3">
            <label className="mb-1">{label}</label>
            <input
                className="form-control"
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    )
}