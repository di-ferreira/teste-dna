function Register() {
  return (
    <div className="justify-content-center d-flex w-100 h100">
      <div className="d-flex flex-column card-register">
        <h1 className="title-custom">Register DNA</h1>

        <div className="row px-5 mt-3">
          <div className="col-md-12">
            <input
              type="text"
              className="input-custom form-group w-100"
              placeholder="Name"
            />
          </div>
        </div>

        <div className="row px-5 mt-1">
          <div className="col-md-5">
            <input
              type="email"
              className="input-custom form-group w-100"
              placeholder="E-mail"
            />
          </div>

          <div className="col-md-4">
            <input
              type="tel"
              className="input-custom form-group w-100"
              placeholder="Phone"
            />
          </div>

          <div className="col-md-3">
            <input
              type="date"
              className="input-custom form-group w-100"
              placeholder="Birthdate"
            />
          </div>
        </div>

        <div className="row px-5 mt-1">
          <div className="col-md-5">
            <input
              type="text"
              className="input-custom form-group w-100"
              placeholder="Web Site"
            />
          </div>

          <div className="col-md-7">
            <input
              type="text"
              className="input-custom form-group w-100"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="row px-5 mt-1">
          <div className="col-md-7">
            <label className="input-custom form-group w-100">
              Send your Avatar
              <input
                type="file"
                className="input-custom-file"
                accept="image/*"
              />
            </label>
          </div>

          <div className="col-md-5">
            <select className="input-custom form-group w-100">
              <option selected disabled hidden>
                You work status
              </option>
              <option value="freelancer">Freelancer</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
            </select>
          </div>
        </div>
        <div className="row px-5 mt-3">
          <div className="col-md-6 offset-md-3">
            <button type="submit" className="w-100 btn btn-custom-primary">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
