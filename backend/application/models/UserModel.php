<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UserModel extends CI_Model {

    public function getRegistrationRules()
    {
        return array(
            array(
                'field' => 'email',
                'label' => 'Email',
                'rules' => 'required|valid_email',
                'errors' => array(
                    'required' => 'The email field is required.',
                    'valid_email' => 'Please enter a valid email address.'
                )
            ),
            array(
                'field' => 'password',
                'label' => 'Password',
                'rules' => 'required',
                'errors' => array(
                    'required' => 'The password field is required.'
                )
            )
        );
    }

    public function saveRegistrationData($email, $password)
    {
        // Check if the email already exists in the database
            $existingUser = $this->db->get_where('users', array('email' => $email))->row();
            if ($existingUser) {
                return false; // User already exists, return false
            }

            // Generate a password hash
            $passwordHash = password_hash($password, PASSWORD_DEFAULT);

            // Generate a unique token
            $token = substr(bin2hex(random_bytes(3)), 0, 6);

            // Set the token expiration to 24 hours from the current time
            $tokenExpire = date('Y-m-d H:i:s', strtotime('+24 hours'));

            // Prepare the data for insertion
            $data = array(
                'email' => $email,
                'password' => $passwordHash,
                'token' => $token,
                'token_expire' => $tokenExpire,
                'status' => '0', // Set the initial status to 'pending'
                'register_date' => date('Y-m-d H:i:s') // Set the current date and time as the registration date
            );
    }

    public function login($email, $password)
    {
        $this->form_validation->set_rules('email', 'email', 'required');
        $this->form_validation->set_rules('password', 'Password', 'required');

        if ($this->form_validation->run() == FALSE)
        {
            return false; // Validation failed
        }

        // Perform login logic
        $this->db->where('email', $email);
        $this->db->where('password', $password);
        $query = $this->db->get('users');
        return $query->row();
    }

}