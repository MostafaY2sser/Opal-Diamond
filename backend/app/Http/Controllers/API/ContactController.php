<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Http;
use App\Models\ContactMessage;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:20',
            'message' => 'required|string',
        ]);

        // 1️⃣ تخزين في DB
        $contact = ContactMessage::create($validated);

        // 2️⃣ ارسال ايميل
        Mail::to('contact@opaldiamndclinic.com')
            ->send(new ContactMail($validated));

        // 3️⃣ ارسال الي Google Sheet
        Http::post('https://api.sheety.co/a7a71a57c2972ffac923691f94c95be5/opalMessages/sheet1', [
            'sheet1' => [
                'name' => $validated['name'],
                'email' => $validated['email'],
                'phone' => $validated['phone'],
                'message' => $validated['message'],
                'date' => now()->format('Y-m-d H:i'),
            ]
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Message sent successfully'
        ]);
    }
}