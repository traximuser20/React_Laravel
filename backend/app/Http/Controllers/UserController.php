<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Intervention\Image\Facades\Image;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $user = User::latest()->get();
        // return response()->json(['users' => $users], 200);
        return response()->json(User::latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // User::create([
        //     'name'=>$request->name,
        //     'email'=>$request->email,
        //     'phone'=>$request->phone,
        // ]);
        // return response()->json('successfully created');

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        if($request->image!="")
        {
            $strpos = strpos($request->image, ';');
            $substring = substr($request->image, 0, $strpos);
            $ext = explode('/', $substring)[1];
            // $image = str_replace('data:image/' . $ext . ';base64,', '', $request->image);
            $name = time() . '.' . $ext;
            $img = Image::make($request->image)->resize(117,100);
            $upload_path = public_path().'/images/';
            // $user->image = $request->image;
            $img->save($upload_path . $name);
            $user->image = $name;
        }
        else 
        {
            $user->image = $request->image;
        }
        // $user->file_path=$request->file('file')->store('images');
        $user->save(); 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(User::whereId($id)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::whereId($id)->first();

        $user->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,

        ]);
        return response()->json('success');

        // $user = new User();
        // $user->name = $request->name;
        // $user->email = $request->email;
        // $user->phone = $request->phone;
        // if($request->image!="")
        // {
        //     $strpos = strpos($request->image, ';');
        //     $substring = substr($request->image, 0, $strpos);
        //     $ext = explode('/', $substring)[1];
        //     // $image = str_replace('data:image/' . $ext . ';base64,', '', $request->image);
        //     $name = time() . '.' . $ext;
        //     $img = Image::make($request->image)->resize(117,100);
        //     $upload_path = public_path().'images/';
        //     // $user->image = $request->image;
        //     $img->save($upload_path . $name);
        //     $user->image = $name;
        // }
        // else 
        // {
        //     $user->image = $request->image;
        // }
        // $user->save(); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::whereId($id)->first()->delete();

        return response()->json('success');
    }
}
