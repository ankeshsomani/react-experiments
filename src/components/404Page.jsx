import React from "react";

export default function NoPage() {
  return (
    <section class="py-0">
      <div class="container">
        <div class="flex-center min-vh-100 py-6 row">
          <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-sm-11">
            <a class="text-decoration-none" href="/">
              <div class="d-flex flex-center fw-bolder fs-5 mb-4">
                <span class="font-sans-serif">Expense Manger</span>
              </div>
            </a>
            <div class="text-center card">
              <div class="p-5 card-body">
                <div class="display-1 text-300 fs-error">404</div>
                <p class="lead mt-4 text-800 font-sans-serif fw-semi-bold">
                  The page you're looking for is not found.
                </p>
                <hr />
                <p>
                  Make sure the address is correct and that the page hasn't
                  moved .
                </p>
                <a className="btn btn-primary btn-sm mt-3" href="/">
                  Take me home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
