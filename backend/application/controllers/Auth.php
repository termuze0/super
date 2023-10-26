<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {
    
    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
        $this->load->model('UserModel');
        $this->load->library('cors');
        $this->cors->handle();
    }

    public function index()
    {
        // Display the registration form
        $this->load->view('register_form');
    }

    public function register()
    {
        
         // Get the registration data from the request
         $email = $this->input->post('email');
         $password = $this->input->post('password');

         // Validate the registration data using the User model's validation rules
         $this->form_validation->set_rules($this->UserModel->getRegistrationRules());


         if ($this->form_validation->run() === FALSE) {
            // Validation failed, return validation errors
            $errors = $this->form_validation->error_array();
            $response = array('success' => false, 'errors' => $errors);
            $this->output->set_content_type('application/json')->set_output(json_encode($response));
            return;
        }

        // Validation passed, save the registration data
        $userId = $this->UserModel->saveRegistrationData($email, $password);

        if ($userId) {
            // Registration successful
            $response = array('success' => true, 'message' => 'Registration successful');
        } else {
            // Error occurred during registration
            $response = array('success' => false, 'message' => 'Registration failed');
        }

        $this->output->set_content_type('application/json')->set_output(json_encode($response));
    

    }

    public function login()
    {

        // Validate user input
        $this->form_validation->set_rules('username', 'Username', 'required');
        $this->form_validation->set_rules('password', 'Password', 'required');

        if ($this->form_validation->run() == FALSE)
        {
            // Display login form with validation errors
            $this->load->view('login');
        }
        else
        {
            $username = $this->input->post('username');
            $password = $this->input->post('password');

            // Check user credentials
            $user = $this->User_model->login($username, $password);

            if ($user)
            {
                // Store user data in session or perform other actions
                $this->session->set_userdata('user', $user);
                redirect('dashboard');
            }
            else
            {
                // Display error message
                $data['error'] = 'Invalid username or password.';
                $this->load->view('login', $data);
            }
        }
    }

}