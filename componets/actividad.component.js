const Activity =(props)=>{
    return <div className="card">
        {
            props.actividades.map((actividad)=>{
                return <div className="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            })
        }
    </div>
}
export default Activity